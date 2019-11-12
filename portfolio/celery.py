from __future__ import absolute_import
from __future__ import print_function
import os
from celery import Celery

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio.settings')

from django.conf import settings

# app = Celery(broker=settings.CELERY_BROKER_URL)
app = Celery('portfolio')
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

app.conf.beat_schedule = {
}

@app.task(bind=True)
def debug_task(self, remote, *args, **kwargs):
    print("Remote sent: %s" % str(remote))
    print('Request: {0!r}'.format(self.request))
    return {'result': 'pong'}


if __name__ == '__main__':
    app.start()
