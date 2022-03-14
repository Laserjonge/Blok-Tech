const  mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({



    name:{

        type:String,

        required:true,

    },


    age:{
        type:String,

        required:true,

    },

	city:{
        type:String,

        required:true,

    },

	match:{
        type:String,

        required:true,

    },



})



const User = mongoose.model('User', userSchema);



module.exports = User;