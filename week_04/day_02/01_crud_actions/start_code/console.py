import pdb 
from models.task import Task
import repositories.task_repository as task_repository

task_repository.delete_all()

task_1 = Task("Go for run", "Jack Jarvis", 20)
task_repository.save(task_1)

task_1.mark_complete()
task_repository.update(task_1)

found = task_repository.select(task_1.id)

# result = task_repository.select_all()

# for task in result:
#     print(task.__dict__)

pdb.set_trace()