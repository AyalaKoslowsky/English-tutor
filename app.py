from flask import Flask, jsonify
from flask_cors import CORS
import random
import sqlite3

app = Flask(__name__)
CORS(app)


# Endpoint to get random objects
@app.route('/get_random_objects', methods=['GET'])
def get_random_objects():
    connection = sqlite3.connect("game.db")
    cursor = connection.cursor()

    number = random.randint(1, 10)
    number2 = random.randint(1, 10)
    number3 = random.randint(1, 10)

    cursor.execute("SELECT name FROM objects WHERE id = ?", (number,))
    photo_name = cursor.fetchone()[0]

    while number2 == number:
        number2 = random.randint(1, 10)

    while number3 == number2 or number3 == number:
        number3 = random.randint(1, 10)

    cursor.execute("SELECT name FROM objects WHERE id = ?", (number2,))
    word2 = cursor.fetchone()[0]
    cursor.execute("SELECT name FROM objects WHERE id = ?", (number3,))
    word3 = cursor.fetchone()[0]

    word_options = [photo_name, word2, word3]
    random.shuffle(word_options)

    connection.close()

    return jsonify({
        "correct_word": photo_name,
        "word_options": word_options
    })


if __name__ == '__main__':
    app.run(debug=True)
