# For Loop

# numbers = [1, 2, 3, 4, 5]
# total = 0

# for number in numbers:
#   total = total + number
# print(total)


# chickens = ["margaret", "hetty", "henrietta", "audrey", "maple"]

# for chicken in chickens:
#   print(chicken)


chickens = [
  {"name": "Margaret", "age": 2, "eggs": 0},
  {"name": "Hetty", "age": 1, "eggs": 2},
  {"name": "Henrietta", "age": 3, "eggs": 1},
  {"name": "Audrey", "age": 2, "eggs": 0},
  {"name": "Mabel", "age": 5, "eggs": 1},
]
total = 0

for chicken in chickens:
  # print(f"{chicken['name']} is {chicken['age']}")
  total += chicken["eggs"]
  chicken["eggs"] = 0

print(f"{total} eggs collected")
print(chickens)