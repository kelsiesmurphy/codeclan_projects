from app import app
from flask import render_template
from models.todo_list import tasks

@app.route("/")
def index():
    return "Hello World!"

@app.route("/tasks")
def show_tasks():
    return render_template("index.html", title="Home", tasks=tasks)

@app.route("/tasks/<task_id>")
def show_task(task_id):
    task = task[task_id]
    return render_template("task.html", title="Task", task=task)