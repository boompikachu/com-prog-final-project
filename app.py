from flask import request
from flask import jsonify
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/test")
def test():
    return "Hello test!"

@app.route("/greeting")
def greeting():
    name = request.args.get('name')
    return "<p><h3>Hello "+name+"</h3></p>"

@app.route("/testjson")
def testjson():
    get_id = request.args.get('id')
    d = dict()
    d['id']=get_id
    d['score']=[{'quiz1':20,'quiz2':30,'quiz3':25},{'quiz1':21,'quiz2':23,'quiz3':19}]
    return jsonify(d)
