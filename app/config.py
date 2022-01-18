class BaseConfig:
    """Base config."""
    HOST = "0.0.0.0"
    PORT = 5000
    
class ProdConfig(BaseConfig):
    ENV = 'production'
    FLASK_ENV = 'production'
    DEBUG = False
    TESTING = False
    
class DevConfig(BaseConfig):
    ENV = 'development'
    FLASK_ENV = 'development'
    DEBUG = True
    TESTING = True