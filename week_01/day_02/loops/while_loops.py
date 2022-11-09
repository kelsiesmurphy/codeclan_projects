#  While Loops

# counter = 0
# my_number = 5

# while (counter < my_number):
#   print(f"Counter is {counter}")
#   counter += 1


# my_number = 5
# value = int(input("What number am I thinking of? "))

# while (value != my_number):
#   value = int(input("Nope! Try again: "))

# print("Nice one, you got it!")


while (True):
  line = input("Type something: ")
  if (line.lower() == "q"):
    break
  print(f"You typed: {line}")