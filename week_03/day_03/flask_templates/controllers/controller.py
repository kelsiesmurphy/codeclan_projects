from app import app
from flask import render_template
from models.todo_list import tasks

@app.route("/")
def index():
    return "Hello World!"

@app.route("/tasks")
def show_tasks():
    return render_template("index.html", title="Home", tasks=tasks)