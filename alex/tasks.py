from celery.task import task
from portfolio.celery import app


from django.core.mail import send_mail, EmailMessage
from django.conf import settings


# @task(ignore_result=True)
@app.task(ignore_result=True)
def send_email(message, from_email):
    subject = 'Message from Portfolio, email - %s' % from_email
    print(from_email)
    email = EmailMessage(subject=subject, body=message, to=[settings.TO_EMAIL])
    email.send()
    # send_mail()
