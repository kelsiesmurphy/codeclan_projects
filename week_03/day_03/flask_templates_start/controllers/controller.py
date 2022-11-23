from flask import render_template, request # ADDED
from app import app
from models.task import Task
from models.todo_list import tasks

@app.route('/tasks')
def index():
    return render_template('index.html', title='Home', tasks=tasks)


@app.route('/tasks', methods=['POST'])
def add_task():
    form_data = request.form
    title = form_data["title"]
    description = form_data["description"]
    new_task = Task(title, description, False)
    tasks.append(new_task)
    return "done"