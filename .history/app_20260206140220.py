from flask import Flask, flash, redirect, render_template, request

app = Flask(__name__)
    
# TODO: Delete
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
# app.config["TEMPLATES_AUTO_RELOAD"] = True



@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)