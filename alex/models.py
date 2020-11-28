from django.db import models
from django.utils.translation import gettext_lazy as _


class Project(models.Model):
    TYPES = (('landing', _('Landing pages')),
             ('internet_shop', _('Internet shops')),
             ('corporate_site', _('Corporate sites')),
             ('other', _('Other'))
             )
    name = models.CharField(max_length=1024)
    type = models.CharField(max_length=14, choices=TYPES)

    class Meta:
        db_table = 'project'
    
    def __str__(self):
        return '<Project id:%s name:%s>' % (self.id, self.name)
    

class Attachments(models.Model):
    TYPES = (('image', _('Image')),
             ('vidoe', _('Video')),
            )

    attachment = models.FileField(upload_to='works/')
    description = models.TextField(null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    type = models.CharField(max_length=5, choices=TYPES, default='image')
    project = models.ForeignKey('alex.Project', null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = 'attachments'

    def __str__(self):
        return '<Attachment id:%s name:%s >' % (self.id, self.name)


class Client(models.Model):
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=2048, null=True, blank=True)
    attach = models.FileField(upload_to='clients/', null=True, blank=True)

    class Meta:
        db_table = 'client'
    
    def __str__(self):
        return '<Client id: %s>' % self.id


class Feedback(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='feedback/', null=True, blank=True)
    comment = models.TextField()
    client = models.ForeignKey('alex.Client', blank=True, null=True, on_delete=models.CASCADE)

    class Meta:
        db_table = 'feedback'

    def __str__(self):
        return '<Feedback id:%s name:%s>' % (self.id, self.name)
