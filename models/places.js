const mongoose = require('mongoose')
const ObjectId = require('mongoose').Types.ObjectId;  

const Places = mongoose.model('Places',{

    _id:ObjectId,

    name:String,
      
    longitude:String,
       
    latitude:String,
        
    city:String,
      
    country:String,
       
    time:String,
       
    photo:String
      
      
 
})

module.exports = {Places}