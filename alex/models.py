from django.db import models
from django.utils.translation import gettext_lazy as _


class Attachments(models.Model):
    TYPES = (('image', _('Image')),
             ('vidoe', _('Video')),
            )

    attachment = models.FileField(upload_to='works/')
    description = models.TextField()
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=5, choices=TYPES, default='image')

    class Meta:
        db_table = 'attachments'

    def __str__(self):
        return '<Attachment id:%s name:%s >' % (self.id, self.name)


class Feedback(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='feedback/', null=True)
    comment = models.TextField()

    class Meta:
        db_table = 'feedback'

    def __str__(self):
        return '<Feedback id:%s name:%s>' % (self.id, self.name)


class Client(models.Model):
    name = models.CharField(max_length=255),
    url = models.CharField(max_length=2048, null=True, blank=True)
    attach = models.FileField(upload_to='clients/', null=True)

    class Meta:
        db_table = 'client'
    
    def __str__(self):
        return '<Client id: %s>' % self.id
