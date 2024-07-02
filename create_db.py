import sqlite3

objects_arr = ['Apple', 'Orange', 'Banana', 'Pear', 'Grape', 'Strawberry', 'Watermelon', 'Pineapple', 'Cherry', 'Mango']

connection = sqlite3.connect("game.db")
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS objects (id INTEGER, name TEXT, link TEXT)")
for i in range(10):
    cursor.execute("INSERT INTO objects VALUES (?, ?)", (i+1, objects_arr[i]))

connection.commit()

cursor.execute("SELECT * FROM objects")
rows = cursor.fetchall()
for row in rows:
    print(row)

connection.close()
