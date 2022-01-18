from sqlalchemy import DateTime, func
from sqlalchemy_utils import EmailType
from app import db

class User(db.Model):
    """ User model """
    __tablename__ = 'user'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(EmailType, nullable=False,)
    job_title = db.Column(db.String(100), nullable=False)
    start_date = db.Column(DateTime, default=func.now())

def commit_to_db(entry):
    try:
        db.session.add(entry)
        db.session.commit()
        return entry
    except Exception as e:
        raise e

def delete_from_db(entry):
    try:
        db.session.delete(entry)
        db.session.commit()
        return entry.id
    except Exception as e:
        raise e