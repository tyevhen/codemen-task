from marshmallow.exceptions import ValidationError
import logging
from ..models.user import User, commit_to_db, delete_from_db
from flask import request, Blueprint, jsonify, make_response
from ..schemas.user import user_schema, users_schema, user_update_schema
import json

user = Blueprint('users', __name__, url_prefix='/user')

@user.route('/', methods=['GET'])
def get_all():
    query = request.args
    users = User.query.all()
    return jsonify(users_schema.dump(users)), 200

@user.route('/', methods=['POST'])
def create():
    try:
        user = user_schema.load(json.loads(request.data))
        new_user = commit_to_db(user)
        return jsonify(user_schema.dump(new_user)), 200
    except ValidationError as e:
        # logging.exception(e)
        return jsonify(e.messages), 422

@user.route('/<id>', methods=['GET'])    
def get_one(id):
    user = User.query.get(id)
    if not user:
        return jsonify({
            'error': {
                'message': 'No user with id: {} exists'.format(id)
            }
        }, 404)
    return jsonify(user_schema.dump(user)), 200

@user.route('/<id>', methods=['PUT'])
def update(id):
    if id != request.data.get('id'):
        return jsonify('Bad request'), 400
        
    try:
        print("DATA", request.data) 
        user = User.query.get(id)
        if not user:
            return jsonify({
                'error': {
                    'message': 'Can not update user with id: {}'.format(id)
                }
            }, 404)
        updated_user_schema = user_update_schema.load(json.loads(request.data))
        updated_user = commit_to_db(updated_user_schema)
        return jsonify(user_schema.dump(updated_user)), 200
    except ValidationError as e:
        return jsonify(e.messages), 422

@user.route('/<id>', methods=['DELETE'])
def delete(id):
    user_to_delete = User.query.get(id)
    if not user_to_delete:
        return make_response({
            'error': {
                'details': 'Can not delete user with id: {}'.format(id)
            }
        }, 404)
    id = delete_from_db(user_to_delete)
    return make_response(jsonify(id), 200)

