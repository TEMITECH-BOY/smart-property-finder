# inquiries/views.py
from rest_framework import generics, permissions
from .models import Inquiry
from .serializers import InquirySerializer

class InquiryView(generics.ListCreateAPIView):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer
    permission_classes = [permissions.IsAuthenticated]