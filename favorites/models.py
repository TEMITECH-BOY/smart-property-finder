from django.db import models
from users.models import CustomUser
from listings.models import Listing

class Favorite(models.Model):
    user = models.ForeignKey(
        CustomUser, 
        on_delete=models.CASCADE, 
        related_name="favorites"
    )
    listing = models.ForeignKey(
        Listing, 
        on_delete=models.CASCADE, 
        related_name="favorited_by"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "listing")  # Prevent duplicate favorites

    def __str__(self):
        return f"{self.user.email} → {self.listing.title}"