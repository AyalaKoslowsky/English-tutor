import sqlite3
from pathlib import Path
import os

objects_arr = ['Apple', 'Orange', 'Banana', 'Pear', 'Grape', 'Strawberry', 'Watermelon', 'Pineapple', 'Cherry', 'Mango']
images_path = Path(os.getcwd()) / "images"

connection = sqlite3.connect("game.db")
cursor = connection.cursor()

# cursor.execute("CREATE TABLE IF NOT EXISTS objects (id INTEGER, name TEXT, link TEXT)")
for i in range(10):
    cursor.execute("INSERT INTO objects VALUES (?, ?, ?)", (i+1, objects_arr[i], str(images_path / f'{objects_arr[i].lower()}.png')))

connection.commit()

cursor.execute("SELECT * FROM objects")
rows = cursor.fetchall()
for row in rows:
    print(row)

connection.close()
