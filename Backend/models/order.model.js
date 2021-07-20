const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({

      orderId:{ type : String, required :true,unique:true},
      date: {type:Date, required :true,unique:false},
      payment:{type:Number , required:true,unique:false},
      agent:{type:String , required:true,unique:false},
      shipper:{type:String , required:true,unique:false},
      user:{type:String , required:false,unique:false},
      customer:{type:String, required:false,unique:false},
      insuranceCost:{type:Number,required:true,unique:false},
      shippingCost:{type:Number,required:true,unique:false},
      agentPayment:{type:Number,required:true,unique:false},
      auctionSheetid:{type:String,required:false,unique:false},
      auctionSheet:{type:String,required:false,unique:false},
      invoiceNumber:{type:String,required:false,unique:false},
      bank:{type:String,required:false,unique:false},
      bankEmail:{type:String,required:false,unique:false},
      locNum:{type:String,required:false,unique:false},
      cif:{type:Number,required:false,unique:false}




},{
    timestamps:true,
});


const Order = mongoose.model('Order', orderSchema);

module.exports= Order;

