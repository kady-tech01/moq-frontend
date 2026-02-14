"""
Django settings for main project.
"""

import os
import dj_database_url
from pathlib import Path
import cloudinary
import cloudinary.uploader
import cloudinary.api

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-x$dzwzp(%r_mn&uq(ohe5egtr^59tdryfv1gl9ynkypm=htc7y'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    '.vercel.app',
    '.railway.app',
    '.onrender.com',
]

# Application definition
INSTALLED_APPS = [
    'whitenoise.runserver_nostatic',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'cloudinary_storage',
    'django.contrib.staticfiles',
    'cloudinary',
    'home',
    'about', 
    'departements',
    'news',
    'events',
    'sponsors',
    'activities',
    'achievements',
    'announces',
    'feedback',
    'rest_framework',
    'corsheaders', 
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'main.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR,'main','templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'main.wsgi.application'

# Database
DATABASES = {
    'default': dj_database_url.config(
        default='sqlite:///db.sqlite3',
        conn_max_age=600
    )
}

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Media files (will be handled by Cloudinary)


# CORS settings
CORS_ALLOW_ALL_ORIGINS = True    
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://*.vercel.app',
    'https://*.railway.app',
    'https://moq-ashy.vercel.app',
]

# Render settings
RENDER = os.environ.get('RENDER', False)

if RENDER:
    ALLOWED_HOSTS = [
        os.environ.get('RENDER_EXTERNAL_HOSTNAME', 'moq-jbco.onrender.com'),
        'localhost',
        '127.0.0.1'
    ]
    
    CSRF_TRUSTED_ORIGINS = [
        'https://' + os.environ.get('RENDER_EXTERNAL_HOSTNAME', 'moq-jbco.onrender.com'),
        'https://*.onrender.com',
        'https://moq-ashy.vercel.app',
    ]

# Cloudinary settings - 🔴 **استبدلي هذه بالقيم الحقيقية من حسابك**
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': 'dym2lrtni',  # من حساب Cloudinary
    'API_KEY': '416429984581657',         # من حساب Cloudinary
    'API_SECRET': 'WgbMpUsVdyQ5y1QBdI5iB8qi-LM'    # من حساب Cloudinary
}

DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'