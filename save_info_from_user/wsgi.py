import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'save_info_from_user.settings')

application = get_wsgi_application()
