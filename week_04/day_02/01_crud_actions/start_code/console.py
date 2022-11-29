import pdb 
from models.task import Task
from models.user import User
import repositories.task_repository as task_repository
import repositories.user_repository as user_repository

task_repository.delete_all()
user_repository.delete_all()

user_1 = User("John", "Jameson")
user_repository.create(user_1)
user_2 = User("Kelly", "Johnston")
user_repository.create(user_2)

task_1 = Task("Go for run", user_1, 20)
task_repository.save(task_1)

# task_1.mark_complete()
# task_repository.update(task_1)

# found = task_repository.select(task_1.id)

# result = task_repository.select_all()

# for task in result:
#     print(task.__dict__)

pdb.set_trace()