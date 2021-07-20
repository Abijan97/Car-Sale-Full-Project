const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

      modelName:{ type : String, required :true,unique:false},
      company:{type:String,required:true,unique:false},
      fueltype:{type:String , required:true,unique:false},
      seats:{type:String,required:true,unique:false},
      capacity:{type:String,required:true,unique:false},
      bodyStyle:{type:String,required:true,unique:false},
      year:{type:String,required:true,unique:false},
      mileage:{type:String,required:true},
      exteriorColor:{type:String,required:true,unique:false},
      interiorColor:{type:String,required:true,unique:false},
      vehicleImage:{type:String,required:true,unique:false},
      

     



},{
    timestamps:true,
});



const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports= Vehicle; 