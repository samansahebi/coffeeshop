from datetime import timedelta
from random import randint
from rest_framework import status, exceptions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import OTP, User
from django.utils import timezone
from django.conf import settings
from kavenegar import *
from django.utils.translation import gettext_lazy as _


class Login(APIView):

    @staticmethod
    def get_tokens_for_user(user):
        refresh = RefreshToken.for_user(user)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

    def post(self, request):
        data = request.data.copy()

        phone_number = data.get('phone_number')
        otp_code = int(data.get('otp'))
        current_time = timezone.now()

        try:
            query = OTP.objects.get(user__phone_number=phone_number)
        except:
            raise exceptions.NotFound('otp code is not correct')

        generated_otp = int(query.otp_code)
        time_created = query.created_at

        if generated_otp == otp_code:
            if time_created + timedelta(minutes=5) > current_time:
                user = User.objects.get(phone_number=phone_number)
                user.active = True
                user.save()
                query.delete()
                return Response(self.get_tokens_for_user(user), status=status.HTTP_200_OK)
            return Response({'detail': _('OTP expired. Request for OTP again.')}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'detail': _('Wrong OTP Entered.')}, status=status.HTTP_403_FORBIDDEN)


class Refresh(APIView):
    def post(self, request):
        pass


class SendOTP(APIView):
    def post(self, request):
        phone_number = request.data.get('phone_number')
        if User.objects.filter(phone_number=phone_number).exists():
            user = User.objects.get(phone_number=phone_number)
        else:
            user = User.objects.create_user(phone_number=phone_number)
        otp_model = OTP.objects.filter(user__phone_number=phone_number)
        if otp_model.exists():
            time_created = otp_model.first().created_at
            current_time = timezone.now()
            if time_created + timedelta(minutes=5) < current_time:  # 5 Minutes
                self.otp_create_send(user)
                return Response({'detail': _('otp code has been sent to your mobile number')})
            else:
                return Response({_('please wait 5 minutes and try again')}, status=status.HTTP_403_FORBIDDEN)
        else:
            self.otp_create_send(user)
            return Response({'detail': _('otp code has been sent to your mobile number')})

    @staticmethod
    def otp_create_send(user):
        OTP.objects.filter(user=user).delete()
        otp = randint(100000, 999999)
        while OTP.objects.filter(otp_code=otp).exists():
            otp = randint(100000, 999999)
        otp_model = OTP.objects.create(otp_code=otp, user=user)
        # api = KavenegarAPI(settings.KAVENEGAR_API_KEY)
        # params = {
        #     'sender': '10004346',
        #     'receptor': user.phone_number,
        #     'message': _(f'your otp code is: {otp_model.otp_code}')
        # }
        # response = api.sms_send(params)
        # print(response)
        print(otp_model.otp_code)
        return None
