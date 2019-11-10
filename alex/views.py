from django.http import HttpResponse
from django.shortcuts import render, redirect

from alex.forms import EmailForm
from .models import Attachments
from .tasks import send_email


def index(request):
    images = Attachments.objects.all()
    return render(request, 'alex/index.html', {
        'attachments': images
    })


def sending_email(request):
    form_body = EmailForm(request.POST or None)
    if form_body.is_valid():
        data = form_body.cleaned_data
        print(data['email'])
        send_email(data['messages'], data['email'])
    return redirect('alex-index')


def portfolio(request):
    return render(request, 'alex/portfolio.html')