from django.db import models

class Multipliers(models.Model):
    role = models.CharField(max_length=20)
    multipliers = models.JSONField()

    def __str__(self):
        return self.role
