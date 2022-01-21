from flask import current_app, request, jsonify
from .enums.job_titles import JobTitles


@current_app.route('/', methods=['GET'])
def index():
    return 'Alive', 200

@current_app.route('/job-titles', methods=['GET'])
def get_job_titles():
    return jsonify([{'value': e.value} for e in JobTitles]), 200
    