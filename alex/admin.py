from django.contrib import admin
from .models import Attachments, Client, Feedback, Project


admin.site.register(Attachments)
admin.site.register(Client)
admin.site.register(Project)
admin.site.register(Feedback)
