from pymongo import MongoClient
import os,base64

import os
import matplotlib.pyplot as plt
import matplotlib.image as iming

connection = MongoClient("mongodb://127.0.0.1:3001/meteor")
names = connection.list_database_names()
# db = connection.get_database("meteor")
# #
# # names = db.collection_names()
# #
# # #collection = db.get_collection("cfs.Pictures.filerecord")
# # gridFS = GridFS(db, collection="cfs")
# # gridFS = GridFS(db, collection="cfs")
# # #collection = db.get_collection("cfs.Pictures.filerecord")
# # print(gridFS.list())

print(names)
db = connection.get_database("meteor")
names = db.collection_names()
print(names)

collection = db.get_collection("images")
base64Img = collection.find_one({},{"data":1,"_id":0})['data']

#use to remove the img type prefix
base64Img = base64Img[base64Img.index(",") + 1 : ]

print(base64Img)

#base64Img = base64Img.replace('data:image/jpeg;base64,','')
print(base64Img)

imgData = base64.b64decode(base64Img)
file = open('1.jpg','wb')
file.write(imgData)
file.close()