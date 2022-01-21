
# Server setup

1. Open mysql console with admin permissions: 
   sudo mysql

2. Create database and user with privileges
   create database user_storage;
   create user 'user_admin'@'localhost' identified by '1234';
   grant all privileges on user_storage.* to 'user_admin'@'localhost';

3. Setup + start virtual environment
   pip install virtualenv
   virtualenv venv
   source venv/bin/activate

4. Install dependencies 
   pip install requirements.txt

5. Run migrations 
   flask db upgrade

6. Launch server app   
   export FLASK_APP=app
   flask run

App client setup instructions are listed in the respective directory: /codemen-task/client.

In case you face any problems setting project up ask help by email tyshchenko.z@gmail.com or other communcation channel.

Extensive comments are missing in code but I can elaborate on cut corners.