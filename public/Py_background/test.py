from pymongo import MongoClient
from gridfs import *
import os
import matplotlib.pyplot as plt
import matplotlib.image as iming

connection = MongoClient("mongodb://127.0.0.1:3001/meteor")
names = connection.list_database_names()
db = connection.get_database("meteor")

names = db.collection_names()

#collection = db.get_collection("cfs.Pictures.filerecord")
gridFS = GridFS(db, collection="cfs")
gridFS = GridFS(db, collection="cfs")
#collection = db.get_collection("cfs.Pictures.filerecord")
print(gridFS.list())