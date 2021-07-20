const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const ReceivingSchema = new Schema({

      orderId:{ type : String, required :true,unique:false},
      shippedDate: {type:Date, required :false,unique:false},
      customAgent:{type:String , required:false,unique:false},
      agentEmail:{type:String,required:false,unique:false},
      agentMobile:{type:String,required:false,unique:false},
      bl: {type:String,required:false,unique:false},
      hsCode:{type:String,required:false,unique:false},
      deliveryOrder:{type:String,required:false,unique:false},


},{
    timestamps:false,
});



const Receiving = mongoose.model('Receiving', ReceivingSchema);

module.exports= Receiving; 