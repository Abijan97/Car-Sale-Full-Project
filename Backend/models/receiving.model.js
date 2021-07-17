const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const ReceivingSchema = new Schema({

      orderId:{ type : String, required :true},
      shippedDate: {type:Date, required :false},
      customAgent:{type:String , required:false},
      agentEmail:{type:String,required:false},
      agentMobile:{type:String,required:false},
      bl: {type:String,required:false},
      hsCode:{type:String,required:false},
      deliveryOrder:{type:String,required:false},


},{
    timestamps:false,
});



const Receiving = mongoose.model('Receiving', ReceivingSchema);

module.exports= Receiving; 