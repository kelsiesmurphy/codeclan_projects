# create empty lists

empty_1 = []
empty_2 = list()

# create a list with some items
fruits = ["apple", "banana", "orange"]

# reassign the value at index
fruits[1] = "pear"
print(fruits)

# Print length of the fruits list
print(len(fruits))

# Add to list
fruits.append("pineapple")
print(fruits)

# Remove from list
removed_fruit = fruits.pop(2)
print(f'I removed {removed_fruit}')