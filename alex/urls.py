from . import views
from django.conf.urls import url


urlpatterns = [
    url(r'^$', views.index, name='alex-index'),
    url(r'^send-email/$', views.sending_email, name='sending-email'),
    url(r'^portfolio/$', views.portfolio, name='portfolio'),
]
