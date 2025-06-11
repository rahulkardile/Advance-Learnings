from flask import Flask, jsonify;
from flask_bcrypt import Bcrypt;
from pymongo import MongoClient;
import os;
from datetime import timedelta
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt_identity
)

app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = 'new_secret'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

bcrypt = Bcrypt(app)
jwt = JWTManager(app)
client = MongoClient("mongodb://localhost:27017/") 
db = client['flask_auth']
user_collection = db['users']

def user_serializer(user):
    return {
        "id": str(user["_id"]),
        "email": user["email"],
        "username": user["username"],
        "password": user["password"]
    }


#   ----- Route ------

@app.route("/", methods=["GET"])
def health(): 
    return jsonify(message="Server is running at it's full potencial"), 200


if __name__ == '__main__':
    app.run(port=5001, debug=True)
