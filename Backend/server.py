from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId, json_util
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)

@app.route('/', methods=['GET'])
def get_server_status():
    return 'Server is Running',200



# All GET Requests

@app.route('/overlay/all', methods=['GET'])
def get():
    collection = mongo.db.overlays
    data = list(collection.find())
    data = json_util.dumps(data)
    return data, 200

@app.route('/overlay/txt', methods=['GET'])
def text():
    collection = mongo.db.overlays
    data = list(collection.find({'type': 'text'}))
    data = json_util.dumps(data)
    return data, 200

@app.route('/overlay/img', methods=['GET'])
def image():
    collection = mongo.db.overlays
    data = list(collection.find({'type': 'image'}))
    data = json_util.dumps(data)
    return data, 200

# All Post Requests

@app.route('/overlay/post', methods=['POST'])
def post():
    collection = mongo.db.overlays
    overlay = request.json
    data = collection.insert_one(overlay)
    return jsonify({"message": "Overlay Created ", "id": str(data.inserted_id)}), 201


# All Update Requests
@app.route('/overlay/update/<id>', methods=['PUT'])
def update(id):
    collection = mongo.db.overlays
    updated_record = request.json
    result = collection.update_one({'_id': ObjectId(id)}, {'$set': updated_record})
    return jsonify({"message": "Overlay Updated", "modified_count": result.modified_count}), 200


# All Delete Requests
@app.route('/overlay/delete/<id>', methods=['DELETE'])
def delete(id):
    collection = mongo.db.overlays
    result = collection.delete_one({'_id': ObjectId(id)})
    return jsonify({"message": "Overlay Deleted", "deleted_count": result.deleted_count}), 200



if __name__ == '__main__':
    app.run(debug=False, port=5001)
