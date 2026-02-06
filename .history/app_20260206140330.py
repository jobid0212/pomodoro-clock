from flask import Flask, flash, redirect, render_template, request

# Flask run --debug
app = Flask(__name__)
    

@app.route('/')
def index():
    return render_template("index.html")
