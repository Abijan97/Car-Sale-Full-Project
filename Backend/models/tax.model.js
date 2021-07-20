const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const TaxSchema = new Schema({

      orderId:{ type : String, required :true},
      receivedDate:{type:Date,required:false},
      cessTax:{type:Number,required:false},
      vat:{type:Number,required:false},
      customDuty:{type:Number,required:false},
      transportPayment:{type:Number , required:false},
      repairPayment:{type:Number , required:false},
      serviceCenter:{type:String , required:false},
      invoiceImage:{ type : String, required :false},
    
      

},{
    timestamps:true,
});



const Tax = mongoose.model('Tax', TaxSchema);

module.exports= Tax; 