const router = require('express').Router();
let Taxes = require('../models/tax.model')

const multer= require('multer');



const storage= multer.diskStorage({
  destination:(req,file,callback)=>{
  //  callback(null,'./uploads/')
  callback(null,'./../frontend/public/taxes/');
  },
  filename:(req,file,callback)=>{
    callback(null,file.originalname)
  }
})

const upload=multer({storage:storage});



router.route('/').get((req,res)=>{

  Taxes.find()
  .then(taxes=>res.json(taxes))
  .catch(err=>res.status(400).json('Error: ' +err));
});

router.route('/add').post(upload.single('invoice'),(req,res)=>
{
    const orderId = req.body.orderId;
    const receivedDate = Date.parse(req.body.receivedDate);
    const cessTax =Number( req.body.cessTax);
    const vat = Number(req.body.vat);
    const customDuty = Number(req.body.customDuty);
    const transportPayment = Number(req.body.transportPayment);
    const repairPayment = Number(req.body.repairPayment);
    const serviceCenter = req.body.serviceCenter;
    const invoiceImage = req.file.originalname;
    


   


    const newTax = new Taxes({
        orderId,
        receivedDate,
        cessTax,
        vat,
        customDuty,
        transportPayment,
        repairPayment,
        serviceCenter,
        invoiceImage

        
    });
  
    newTax.save()
    .then(() =>res.json('Taxes added')) 
    .catch(err => res.status(400).json('Error:' + err));

}
);

router.route('/:id').get((req,res)=>{
    Taxes.findById(req.params.id)
    .then(Tax => res.json(Tax))
    .catch(err => res.status(400).json('Error :'+ err));

});

//deleteagent

router.route('/:id').delete((req,res)=>{
  Taxes.findByIdAndDelete(req.params.id)
  .then(()=>res.json('Taxes deleted.')) 
  .catch(err=>res.status(400).json('error'+ err));
})



router.route('/update/:id').post((req,res)=>{
    Taxes.findById(req,params.id)
    .then(customclearance =>{
        customclearance.orderId=req.body.orderId;
        customclearance.lc=req.body.lc;
        customclearance.invoice=req.body.invoice;
        customclearance.customPayment=Number(req.body.customPayment);
        customclearance.transportPayment=Number(req.body.transportPayment);
        //check the transport payment again
        customclearance.commision=Number(req.body.commision);
        customclearance.taxpayment=Number(req.body.taxpayment);
        customclearance.user=req.body,user;
        customclearance.date=Date.parse(req.body.date);
        

        
 customclearance.save()
 .then(()=> res.json('customclearance updated'))
 .catch(err=>res.status(400).json('error'+ err));
})
.catch(err=>res.status(400).json('Error ' + err));
});

module.exports = router;