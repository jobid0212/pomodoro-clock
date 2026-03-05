from flask import Flask, flash, redirect, render_template, request

# python3 -m venv venv
# source venv/bin/activate
# Flask run --debug
# deactivate
app = Flask(__name__)
    

@app.route('/')
def index():
    return render_template("index.html")
