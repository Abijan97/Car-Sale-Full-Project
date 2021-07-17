const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const TaxSchema = new Schema({

      orderId:{ type : String, required :true},
      receivedDate:{type:Date,required:true},
      cessTax:{type:Number,required:false},
      vat:{type:Number,required:false},
      customDuty:{type:Number,required:false},
      invoice:{ type : String, required :true},
      transportPayment:{type:Number , required:true},
      repairpayment:{type:Number , required:true},
      serviceCenter:{type:String , required:true},
    
      

},{
    timestamps:true,
});



const Tax = mongoose.model('Tax', TaxSchema);

module.exports= Tax; 