const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const userTypeSchema = new Schema({

    usertypeId:{
        type : String,
        required :true,
        unique:true,
        trim:true,
    
    }
},{
    timestamps:true, 
});

 

const UserType = mongoose.model('UserType', userTypeSchema);

module.exports= UserType;