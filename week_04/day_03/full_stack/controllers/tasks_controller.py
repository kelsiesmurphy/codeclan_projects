from flask import render_template, Blueprint

task_blueprint = Blueprint("tasks", __name__)

@task_blueprint.route('/tasks')
def tasks():
    return render_template('tasks/index.html')