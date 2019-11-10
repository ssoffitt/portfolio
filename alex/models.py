from django.db import models

# Create your models here.

class Attachments(models.Model):
    attachment = models.FileField(upload_to='works/')
    description = models.TextField()
    name = models.CharField(max_length=255)

    class Meta:
        db_table = 'attachments'

    def __str__(self):
        return '<Attachment id:%s name:%s >' % (self.id, self.name)