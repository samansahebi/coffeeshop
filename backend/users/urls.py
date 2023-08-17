from django.urls import path
from .views import Login, Refresh, SendOTP


urlpatterns = [
    path('login', Login.as_view()),
    path('refresh', Refresh.as_view()),
    path('send-otp', SendOTP.as_view()),
]
