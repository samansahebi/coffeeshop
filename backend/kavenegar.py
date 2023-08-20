# #!/usr/bin/env python
# from kavenegar import *
# try:
#         import json
# except ImportError:
#         import simplejson as json
# try:
#     api = KavenegarAPI('{Your APIKey}')
#     params = {
#         'sender': '10004346',
#         'receptor': '{Your Phone Number}',
#         'message': 'Kaveh specialized Web service '
#     }
#     response = api.sms_send(params)
#         print str(response)
# except APIException,e:
#         print str(e)
# except HTTPException,e:
#         print str(e)