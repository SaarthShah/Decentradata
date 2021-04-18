import pymongo

client = pymongo.MongoClient(
   "mongodb+srv://seanroades:justiN95!@virtual-worlds-cluster.fytit.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mydb= client["dcl"]
mycol= mydb["recs"]

for x in mycol.find():
    print(x['title'])

print('complete')