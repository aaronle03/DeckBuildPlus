import pymongo
from pymongo import MongoClient
from flask import Flask, request, jsonify
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
            'carddefid': card['carddefid'],
            'abilities': card['abilities']
        }
        cardList.append(card_info)
    return jsonify(cardList)

@app.route('/api/savePersonalDeck', methods=['POST'])
def save_personal_deck():
    deck_data = request.json  # Assuming the payload contains a "deck" field with the deck data
    if 'deck' in deck_data and len(deck_data['deck']) == 12:
        dbname = get_database()
        collection = dbname["personalDecks"]  # Create a collection for personal decks
        try:
            result = collection.insert_one({'cards': deck_data['deck']})
            return jsonify({'message': 'Personal deck saved successfully!'})
        except Exception as e:
            return jsonify({'error': 'Failed to save personal deck.', 'details': str(e)})
    else:
        return jsonify({'error': 'Invalid personal deck data or length.'})

if __name__ == '__main__':
    app.run(debug=True)