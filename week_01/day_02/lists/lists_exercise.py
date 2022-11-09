# 1. Create an empty list called `task_list`
# 2. Add a few `str` elements, representing some everyday tasks e.g. 'Make Dinner'
# 3. Print out `task_list`
# 4. Remove the last task
# 5. Print out `task_list`
# 6. Print out the number of elements in `task_list`

# 1. Create an empty list called `task_list`
task_list = []

# 2. Add a few `str` elements, representing some everyday tasks e.g. 'Make Dinner'
task_list.append("Make Dinner")
task_list.append("Do the washing")
task_list.append("Walk the dog")
task_list.append("Eat breakfast")
task_list.append("Meet with friends")

# 3. Print out `task_list`
print(task_list)

# 4. Remove the last task
task_list.pop()

# 5. Print out `task_list`
print(task_list)

# 6. Print out the number of elements in `task_list`
print(len(task_list))