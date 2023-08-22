from django.urls import path
from .views import Login, Refresh, SendOTP
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('login', Login.as_view()),
    path('refresh', TokenRefreshView.as_view()),
    path('send-otp', SendOTP.as_view()),
]
