const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

      modelName:{ type : String, required :true},
      company:{type:String,required:true},
      fueltype:{type:String , required:true},
      seats:{type:String,required:true},
      capacity:{type:String,required:true}

     



},{
    timestamps:true,
});



const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports= Vehicle; 