# inquiries/models.py
from django.db import models
from users.models import CustomUser
from listings.models import Listing

class Inquiry(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="inquiries")
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name="inquiries")
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Inquiry by {self.user.email} for {self.listing.title}"