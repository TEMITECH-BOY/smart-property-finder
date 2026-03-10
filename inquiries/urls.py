# inquiries/urls.py
from django.urls import path
from .views import InquiryView

urlpatterns = [
    path('', InquiryView.as_view(), name='inquiries-list-create'),
]