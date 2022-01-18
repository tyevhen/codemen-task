from flask import current_app, request, jsonify


@current_app.route('/', methods=['GET'])
def index():
    return 'Alive', 200

@current_app.route('/job-titles', methods=['GET'])
def get_job_titles():
    return jsonify(users)

# @current_app.route('/users')
# @current_app.route('/')
# def get
    