from flask import Flask, render_template, jsonify, request
import pymongo
import openai
from bson.json_util import dumps

openai.api_key = "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"

app = Flask(__name__)
myclient = pymongo.MongoClient("mongodb+srv://Anubhav:Hello@chatgpt-clone.8xlv2pz.mongodb.net/chatgpt")
db = myclient["chatgpt"]

@app.route("/")
def home():
    mychats = db.list_collection_names()
    mychats =reversed(mychats)
    return render_template("index.html", myChats = mychats)

@app.route("/api", methods=["GET", "POST"])
def qa():
    if request.method == "POST":
        print(request.json)
        question = request.json.get("question")
        chats = db[question]
        response = openai.Completion.create(
            model="text-ada-001",
            prompt=question,
            temperature=0.75,
            max_tokens=2048,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
        print(response)
        data = {"question": question, "answer": response["choices"][0]["text"]}
        print(data)
        chats.insert_one(data)
        cursor = chats.find()
        list_cur = list(cursor)
        print(dumps(list_cur))
        return dumps(list_cur)
    data = {"result": "Thank you! I'm just a machine learning model designed to respond to questions and generate text based on my training data. Is there anything specific you'd like to ask or discuss? "}
        
    return jsonify(data)

@app.route("/apk", methods=["GET", "POST"])
def qna():
    if request.method == "POST":
        print(request.json)
        question = request.json.get("question")
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=question,
            temperature=0.7,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
        print(response)
        data = {"question": question, "answer": response["choices"][0]["text"]}
        print(data)
        return jsonify(data)
    data = {"result": "Thank you! I'm just a machine learning model designed to respond to questions and generate text based on my training data. Is there anything specific you'd like to ask or discuss? "}
        
    return jsonify(data)

app.run(debug=True, port=5001)