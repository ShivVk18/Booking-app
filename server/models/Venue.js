const mongoose = require('mongoose')

const VenueSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
     title:{
        type:String,
        required:true
     },
     location:{
        type:String,
        required:true
     },
     photos:[
        {
            type:String
        }
     ],
     description:{
        type:String,
        required:true
     },
     features:[{
        type:String
     }],
     extraInfo:{
        type:String
     },
     checkIn:{
        type:Number
     },
     checkOut:{
        type:Number
     },
     maxGuests:{
        type:Number
     }

})


module.exports = mongoose.model("Venue",VenueSchema)