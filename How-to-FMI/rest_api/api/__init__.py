from api.blueprints.users import users_api
from api.blueprints.susi import susi_api

FB_URL = 'https://graph.facebook.com/me?me?fields=id,name,email&access_token='
JWT_SECRET = 'secret'
JWT_ALGORITHM = 'HS256'
JWT_EXP_DELTA_SECONDS = 20
