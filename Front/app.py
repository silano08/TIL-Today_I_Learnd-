from flask import Flask, render_template, jsonify, request
app = Flask(__name__)
## HTML 화면 보여주기

from pymongo import MongoClient

# 나중에 DB쓴다면
#client = MongoClient('mongodb://test:test@localhost', 27017)
# client = MongoClient('localhost', 27017)
# db = client.dbhomework


@app.route('/')
def homework():
    return render_template('index.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)