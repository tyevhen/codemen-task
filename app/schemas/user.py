from marshmallow import validate
from app import ma
from app.models.user import User

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        load_instance = True

    id = ma.auto_field()
    first_name = ma.auto_field(required=True)
    last_name = ma.auto_field(required=True)
    email = ma.auto_field(required=True, validate=validate.Email())
    job_title = ma.auto_field()
    # start_date = ma.auto_field()

class UserUpdateSchema(UserSchema):
    id = ma.auto_field(required=True)
    first_name = ma.auto_field(required=True)
    last_name = ma.auto_field(required=True)
    email = ma.auto_field(required=True, validate=validate.Email())
    job_title = ma.auto_field(required=True)
    
    
user_update_schema = UserUpdateSchema()
user_schema = UserSchema()
users_schema = UserSchema(many=True)
