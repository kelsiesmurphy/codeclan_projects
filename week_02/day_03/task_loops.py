# Part 1
ages = [5, 15, 64, 27, 84, 26]
odd_ages = [age for age in ages if age % 2 != 0]
print(odd_ages)

# Part 2
chicken_names = ["Hen Solo", "Cluck Norris", "Hennifer Lopez", "ChewPekka", "Feather Locklear"]
more_than_ten = [name for name in chicken_names if len(name) > 10]
print(more_than_ten)
starts_with_h = [name for name in chicken_names if name[0].upper() == "H"]
print(starts_with_h)

# Part 3
words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
first_letters = [word[0].lower() for word in words]
print(first_letters)