from ..models.user import User, commit_to_db, delete_from_db
from flask import request, Blueprint, jsonify
from ..schemas.user import user_schema, users_schema, user_update_schema
import json

user = Blueprint('users', __name__, url_prefix='/user')

@user.route('', methods=['GET'])
def get_all():
    query = request.args
    users = User.query.all()
    return jsonify(users_schema.dump(users))

@user.route('', methods=['POST'])
def create():
    errors = user_schema.validate(json.loads(request.data))
    if errors:
        return jsonify({'errors': errors}), 422
    user = user_schema.load(json.loads(request.data))
    new_user = commit_to_db(user)
    return jsonify(user_schema.dump(new_user)), 201

@user.route('/<id>', methods=['GET'])    
def get_one(id):
    user = User.query.get(id)
    if not user:
        return jsonify({'error': 'Not found'}), 404
    return jsonify(user_schema.dump(user))

@user.route('/<id>', methods=['PUT'])
def update(id):    
    data = json.loads(request.data)
    user = User.query.get(id)
    if not user:
        return jsonify({'error': 'Can not update user with id: {}'.format(id)})
    errors = user_update_schema.validate(data)
    if errors:
        return jsonify({'errors': errors}), 400
 
    updated_user_schema = user_update_schema.load(data)
    updated_user = commit_to_db(updated_user_schema)
    return jsonify(user_schema.dump(updated_user)), 200

@user.route('/<id>', methods=['DELETE'])
def delete(id):
    user = User.query.get(id)
    if not user:
        return jsonify('Can not delete user with id: {}'.format(id)), 404
    id = delete_from_db(user)
    return jsonify('User {} deleted'.format(id)), 200

