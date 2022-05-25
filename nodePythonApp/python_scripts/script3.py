import json

with open('/Users/niveytha/Documents/My Documents/Coding/Learn-Node.js/nodePythonApp/data/countries.json') as json_data:
    for entry in json_data:
        print(entry)