from flask import render_template, request, Blueprint, redirect
from repositories import task_repository, user_repository
from models.task import Task

task_blueprint = Blueprint("tasks", __name__)

# INDEX
# GET '/tasks'
@task_blueprint.route('/tasks')
def tasks():
    all_tasks_list = task_repository.select_all()
    return render_template('tasks/index.html', all_tasks_key=all_tasks_list)

# NEW TASK
# GET '/tasks/new'
@task_blueprint.route('/tasks/new')
def new_task():
    users = user_repository.select_all()
    return render_template('tasks/new.html', all_users=users)

# CREATE (save)
# POST '/tasks'
@task_blueprint.route('/tasks', methods=['POST'])
def create_task():
    description = request.form["description"]
    duration = request.form["duration"]
    completed = request.form["completed"]
    user_id = request.form["user_id"]
    
    user = user_repository.select(user_id)
    task = Task(description, user, duration, completed)
    task_repository.save(task)
    return redirect('/tasks')

# SHOW
# GET '/tasks/<id>'
@task_blueprint.route('/tasks/<int:task_id>')
def show_task(task_id):
    task = task_repository.select(task_id)
    return render_template('/tasks/task.html', task=task)

# EDIT (display form)
# GET '/tasks/<id>/edit'
@task_blueprint.route('/tasks/<int:id>/edit')
def edit_task(id):
    task = task_repository.select(id)
    users = user_repository.select_all()
    return render_template('/tasks/edit_task.html', task=task, all_users=users)


# UPDATE
# PUT '/tasks/<id>'
# PUT indicates updating an existing resource
@task_blueprint.route('/tasks/<int:task_id>', methods=['POST'])
def update_task(task_id):
    description = request.form["description"]
    duration = request.form["duration"]
    completed = request.form["completed"]
    user_id = request.form["user_id"]

    user = user_repository.select(user_id)
    updated_task = Task(description, user, duration, completed, task_id)
    task_repository.update(updated_task)

    return redirect(f'/tasks/{updated_task.id}')

# DELETE
# DELETE '/tasks/<id>/delete'
@task_blueprint.route('/tasks/<int:task_id>/delete', methods=['POST'])
def delete_task(task_id):
    task_repository.delete(task_id)
    return redirect('/tasks')