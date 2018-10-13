from django.shortcuts import render
from .models import Attachments


def index(request):
    images = Attachments.objects.all()
    return render(request, 'alex/index.html', {
        'attachments': images
    })
