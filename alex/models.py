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