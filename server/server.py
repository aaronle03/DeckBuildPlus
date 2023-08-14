import pymongo
from pymongo import MongoClient
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_database():
    CONNECTION_STRING = "mongodb+srv://aaronle5621:v9TPpwFYAbZf390X@msdb.5wsch4g.mongodb.net/"
    client = MongoClient(CONNECTION_STRING)
    print("Connection to MongoDB successful!")
    return client['marvalsnapdb']

def get_cards():
    dbname = get_database()
    collection = dbname["cardDB"]
    results = collection.find({}) # This returns all cards, if I wanted to return a certain card I could do .find({"power:1"})
    return results

@app.route('/api/cards', methods=['GET'])
def cards_api():
    cards = get_cards()
    cardList = []
    for card in cards:
        card_info = {
            'name': card['name'],
            'description': card['description'],
            'cost': card['cost'],
            'power': card['power'],
            'category': card['category'],
            'carddefid': card['carddefid']
        }
        cardList.append(card_info)
    return jsonify(cardList)

if __name__ == '__main__':
    app.run(debug=True)