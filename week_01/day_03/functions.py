# def greet(name, time_of_day):
#     return "Good "+ time_of_day + ", " + name

# name_1 = "Kelsie"
# time_of_day_1 = "Morning"
# greeting = greeting = greet(name_1, time_of_day_1)
# print(greeting)

# name_2 = "Ben"
# time_of_day_2 = "Afternoon"
# greeting = greet(name_2, time_of_day_2)
# print(greeting)

# def greet():
#     words = "Hey"
#     return words
    
# def greet_two():
#     words = "Hey"
#     return words
# print(greet_two())


chickens = [
  { "name": "Margaret", "user_id": 2, "eggs": 0 },
  { "name": "Hetty", "user_id": 1, "eggs": 2 },
  { "name": "Henrietta", "user_id": 3, "eggs": 1 },
  { "name": "Audrey", "user_id": 2, "eggs": 0 },
  { "name": "Mabel", "user_id": 5, "eggs": 1 },
]

# def count_eggs(list):

#     total_eggs = 0

#     for bird in list:
#         total_eggs += bird["eggs"]
#         bird["eggs"] = 0 # eggs have been collected

#     return (f"{total_eggs} eggs collected")
# print(count_eggs(chickens))


# def find_chicken_by_name(chicken_list, chicken_name):
#     for chicken in chicken_list:
#         if chicken["name"] == chicken_name:
#             return chicken
#     return None

# chicken = find_chicken_by_name(chickens, "Mabel")
# print(chicken)


users = [
  { "user_id": 1, "first_name": "Guido", "last_name": "van Rossum" },
  { "user_id": 2, "first_name": "Katherine", "last_name": "Johnson" },
  { "user_id": 3, "first_name": "Dorothy", "last_name": "Vaughan" },
  { "user_id": 4, "first_name": "Hen", "last_name": "Solo" },
  { "user_id": 5, "first_name": "Mary", "last_name": "Jackson" },
]

# Write a function that writes a user, find it by user ID

def find_user_by_id(user_list, user_id):
    for user in user_list:
        if user["user_id"] == user_id:
            return user
    return None

desired_id = input("What is the ID? ")
desired_id = int(desired_id)

user = find_user_by_id(chickens, desired_id)
print(user)