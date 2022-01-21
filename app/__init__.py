from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
import json

db = SQLAlchemy()
ma = Marshmallow()            

def create_app():
    app = Flask(__name__)
    # app.config.from_pyfile('config.py')
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://admin:1234@localhost/user_storage'

    migrate = Migrate()
    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app, db)
    
    # Import existing data if table is empty
    from .models.user import User, commit_to_db
    def prefill_db():
        is_empty = User.query.count() == 0
        if is_empty:
            with open('employees.json') as json_file:
                data = json.load(json_file)
                json_file.close()
            
            for u in data:
                user = User(
                    id=u.get('id'), 
                    first_name=u.get('first_name'), 
                    last_name=u.get('last_name'), 
                    email=u.get('email'),
                    job_title=u.get('job_title'),
                    start_date=u.get('start_date')
                )
                commit_to_db(user)
    
    with app.app_context():
        from . import endpoints
        from .blueprints.user import user
        app.register_blueprint(user)
        prefill_db()
        return app
