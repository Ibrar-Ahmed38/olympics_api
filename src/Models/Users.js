const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    ranking : {
        type : String,
        required : true,
        unique : true
    },


    name : {
        type : String,
        required : true,
        unique : true
    },


    dob : {
        type : String,
        required : true,
        trim : true
    },


    country : {
        type : String,
        required : true,
        trim : true
    },


    score : {
        type : Number,
        required : true,
        trim : true
    },


    event : {
        type : String,
        
        trim : true
    }
})


const MensRanking = new  mongoose.model("MensRanking", userSchema)

module.exports = MensRanking

