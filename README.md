
# Server setup

Open mysql console with admin permissions: 
1. sudo mysql

2. create database user_storage;

3. create user 'user_admin'@'localhost' identified by '1234';

4. grant all privileges on user_storage.* to 'user_admin'@'localhost';

5. pip install virtualenv

6. virtualenv venv

7. source venv/bin/activate

8. pip install requirements.txt

9. flask db upgrade

10. export FLASK_APP=app

11. flask run

App client setup instructions are listed in the respective directory: /codemen-task/client.

In case you face any problems setting project up ask help by email tyshchenko.z@gmail.com or other communcation channel.

Extensive comments are missing in code but I can elaborate on cut corners.