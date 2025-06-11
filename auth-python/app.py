from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
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
user_collection = db['users']  # consistent variable name

def user_serializer(user):
    return {
        "id": str(user["_id"]),
        "email": user["email"],
        "username": user.get("username"),  # optional field
        "password": user["password"]
    }

#   ----- Route ------

@app.route("/", methods=["GET"])
def health(): 
    return jsonify(message="Server is running at its full potential"), 200

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if user_collection.find_one({"email": data['email']}):
        return jsonify(message="User already exists"), 409

    hashed_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user_id = user_collection.insert_one({
        "email": data['email'],
        "username": data.get('username'),
        "password": hashed_pw
    }).inserted_id
    return jsonify(id=str(user_id), message="User registered successfully"), 201

if __name__ == '__main__':
    app.run(port=5001, debug=True)
