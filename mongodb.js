const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
 
const connectURL='mongodb://127.0.0.1:27017'


const data = MongoClient.connect(connectURL, {useNewUrlParser: true, useUnifiedTopology:true})


module.exports = data
