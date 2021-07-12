from django.db import models


class InfoFromUser(models.Model):
    info = models.JSONField(null=True)

    def __str__(self):
        return str(self.info)
