import requests
import json

response = requests.get("https://restcountries.com/v3.1/all")

def jprint(obj):
    dictionary = json.dumps(obj, sort_keys=True, indent=4)
    print(dictionary)

jprint(response.json())
