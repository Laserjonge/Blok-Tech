const  mongoose  = require("mongoose");

const filterSchema = new mongoose.Schema({

    voertuig:{
        type:String,
        required:true,
    },

    geslacht:{
        type:String,
        required:true,
    },
    
})



const filter = mongoose.model('filter', filterSchema);



module.exports = filter;