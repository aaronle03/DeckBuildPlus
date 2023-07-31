import pyodbc as odbc
from flask import Flask, jsonify
from flask_cors import CORS

## SQL Connection Information
DRIVER_NAME = 'SQL SERVER'
SERVER_NAME = 'DESKTOP-ALLKD\SQLEXPRESS'
DATABASE_NAME = 'marvalsnapdb'

## Flask Setup
app = Flask(__name__)
CORS(app)

## SQL Connection
connection_string = f"""
    DRIVER={{{DRIVER_NAME}}};
    SERVER={SERVER_NAME};
    DATABASE={DATABASE_NAME};
    Trust_Connection=yes;
"""


# Define a function to fetch data from SQL server
def get_data_from_sql_server():
    try:
        conn = odbc.connect(connection_string)
        print("Connected Succesfully to SQL Server!")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM cardDB")
        rows = cursor.fetchall()
        return rows
    except odbc.Error as e:
        print("Error executing query:", e)
    finally:
        conn.close()

# Create a Flask API endpoint to return the data as JSON
@app.route('/api/cards')
def get_cards():
    rows = get_data_from_sql_server()
    cards = []
    for row in rows:
        card = {
            'id': row[0],
            'cardName': row[1],
            'cardCost': row[2],
            'cardPower': row[3],
            'cardEffect': row[4]
        }
        cards.append(card)
    return jsonify(cards)

if __name__ == '__main__':
    app.run(debug=True)


"""
try:
    conn = odbc.connect(connection_string)
    print("Connected successfully!")
except odbc.Error as e:
    print("Error connecting to SQL Server:", e)

try:
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cardDB")
    rows = cursor.fetchall()
    #for row in rows:
    #    print(row)
    print(rows[40])
except odbc.Error as e:
    print("Error executing query:", e)
finally:
    conn.close()
"""
