const router = require('express').Router();
let Receiving = require('../models/receiving.model');

const multer= require('multer');


const storage= multer.diskStorage({
  destination:(req,file,callback)=>{
  //  callback(null,'./uploads/')
  callback(null,'./../frontend/public/receivings/');
  },
  filename:(req,file,callback)=>{
    callback(null,file.originalname)
  }
})

const upload=multer({storage:storage});



router.route('/').get((req,res)=>{

  Receiving.find()
  .then(receivngs=>res.json(receivngs))
  .catch(err=>res.status(400).json('Error: ' +err));
});

router.route('/add').post(upload.single('deliveryOrder'),(req,res)=>
{
    const orderId = req.body.orderId;
    const shippedDate = Date.parse(req.body.shippedDate);
    const customAgent = req.body.customAgent;
    const agentEmail = req.body.agentEmail;
    const agentMobile = req.body.agentMobile;
    const bl = req.body.bl;
    const deliveryOrder = req.file.originalname;
    const hsCode = req.body.hsCode;


   


    const newReceiving = new Receiving({
        orderId,
        shippedDate,
        receivedDate,
        customAgent,
        agentEmail,
        agentMobile,
        bl,
        deliveryOrder,
        hsCode,

        
    });
  
    newReceiving.save()
    .then(() =>res.json('Receiving added')) 
    .catch(err => res.status(400).json('Error:' + err));

}
);

router.route('/:id').get((req,res)=>{
    Receiving.findById(req.params.id)
    .then(receiving => res.json(receiving))
    .catch(err => res.status(400).json('Error :'+ err));

});





router.route('/update/:id').post((req,res)=>{
    Receiving.findById(req,params.id)
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