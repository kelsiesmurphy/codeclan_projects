meals = ("Yoghurt", "Roll", "Steak")
# print(meals[0])

my_first_empty_dictionary = {}
my_second_empty_dictionary = dict()

meals = {"Breakfast":"Yoghurt", "Lunch":"Roll", "Dinner":"Steak"}
# print(meals["Lunch"])

things = {1:"2", "Kelsie":[1, 2, 3]}

# print("Breakfast" in meals)

meals["Supper"] = "pancakes"
# print(meals)

del(meals["Breakfast"])
# print(meals)

# print(list(meals))
# print(meals.keys())
# print(meals.values())


# Nesting dictionaries
countries = {
  "uk": {"capital": "London", "population": 1000},
  "germany": {"capital": "Berlin", "population": 5000}
}

print(countries["germany"]["population"])