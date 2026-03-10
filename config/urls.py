from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Smart Property Finder API is running 🚀")

urlpatterns = [
    path('', home),   # 👈 add this line
    path('admin/', admin.site.urls),
    path('api/auth/', include('users.urls')),
    path('api/listings/', include('listings.urls')),
    path('api/favorites/', include('favorites.urls')),
    path('api/inquiries/', include('inquiries.urls')),
]