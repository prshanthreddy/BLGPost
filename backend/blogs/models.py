from django.db import models
# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.TextField()
    likes = models.IntegerField(default=0)
    url= models.URLField(max_length=200, blank=True)


    def __str__(self):
        return self.title






