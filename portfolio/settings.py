"""
Django settings for portfolio project.

Generated by 'django-admin startproject' using Django 1.8.14.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

import dj_database_url
from decouple import config, UndefinedValueError

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))



# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'avz#j#987#48k*7l_86^yal2y79_1c*2(3e%m80gm^za^ddy0q'
# SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
# DEBUG=config('DJANGO_DEBUG')

ALLOWED_HOSTS = ['vast-shore-40928.herokuapp.com', 'localhost']

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'djcelery',
    'alex',
)

MIDDLEWARE_CLASSES = (
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'portfolio.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'portfolio.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {'default': {}}
try:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            # 'ENGINE': config('DB_ENGINE'),
            # 'NAME': config('DB_NAME'),
            # 'USER': config('DB_USER'),
            # 'PASSWORD': config('DB_PASSWORD'),
            # 'HOST': config('DB_HOST'),
            'NAME': 'portfolio',
            'USER': 'portfolio',
            'PASSWORD': '',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    
    }
except UndefinedValueError:                                      
    db_from_env = dj_database_url.config()                       
    DATABASES['default'].update(db_from_env) 


# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles') 
STATIC_URL = '/static/'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# Extra places for collectstatic to find static files.                         
STATICFILES_DIRS = (                                                           
    os.path.join(BASE_DIR, 'static'),                                          
) 

EMAIL_USE_TLS = True
# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend' #for real email
EMAIL_HOST = 'smtp.gmail.com'
# EMAIL_HOST_PASSWORD = '81846f869b156ed152c0a8dcb7f307d1'
# EMAIL_HOST_USER = 'asiwija@gmail.com'
# EMAIL_DEBUG_MODE = True
EMAIL_DEBUG_MODE = False
EMAIL_PORT = 587
# EMAIL_PORT = 465 
EMAIL_HOST_USER = 'asiwija@gmail.com'
EMAIL_HOST_PASSWORD = 'ufeueujsvxxtgxdd'
GOOGLE_DRIVE_STORAGE_KEY_FILE = ''
EMAIL_WEBHOOK_SENDGRID_KEY = 'test'
# EMAIL_HOST_USER = 'gahtooh@gmail.com'
# EMAIL_HOST_PASSWORD = '209c9b07a00507ebbb0002b361743a4d'
# DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
DEFAULT_FROM_EMAIL = 'default@test.com'

# TO_EMAIL = 'asiwija@gmail.com'
#
# TO_EMAIL = 'gahtooh@gmail.com'
TO_EMAIL = 'asiwija@gmail.com'

# For RabbitMQ
CELERY_BROKER_URL = 'amqp://portfolio:portfolio@localhost:5672/portfolio'

# CELERY_BROKER_URL = 'amqp://localhost'
# CELERY_RESULT_BACKEND = 'amqp://localhost'
# Celery Data Format
# CELERY_ACCEPT_CONTENT = ['application/json']
# CELERY_TASK_SERIALIZER = 'json'
# CELERY_RESULT_SERIALIZER = 'json'
# CELERY_TIMEZONE = 'Asia/Kolkata'