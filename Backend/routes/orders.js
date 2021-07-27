const router = require('express').Router();
let Order = require('../models/order.model');






//image
const multer= require('multer');


const storage= multer.diskStorage({
  destination:(req,file,callback)=>{
  //  callback(null,'./uploads/')
  callback(null,'./../frontend/public/orders/');
  },
  filename:(req,file,callback)=>{
    callback(null,file.originalname)
  }
})

const upload=multer({storage:storage});



router.route('/').get((req,res)=>{

  Order.find()
  .then(orders=>res.json(orders))
  .catch(err=>res.status(400).json('Error: ' +err));
});


router.route('/add').post(upload.single('auctionSheet'),(req,res)=>
{
    const orderId = req.body.orderId;
    const date = Date.parse(req.body.date);  
    const payment = Number(req.body.payment);
    const agent = req.body.agent;
    const shipper = req.body.shipper;
    const user = req.body.user;
    const customer = req.body.customer;
    const insuranceCost = Number(req.body.insuranceCost);
    const shippingCost = Number(req.body.shippingCost);
    const agentPayment = Number(req.body.agentPayment);
    const auctionSheetid=req.body.autionSheetid;
    const auctionSheet=req.file.originalname;
    const invoiceNumber=req.body.invoiceNumber;
    const bank=req.body.bank;
    const bankEmail=req.body.bankEmail;
    const locNum=req.body.locNum;
    const cif = Number(req.body.cif);
    
   


    const newOrder = new Order({
        orderId,
        date,
        payment,
        agent,
        shipper,
        user,
        customer,
        insuranceCost,
        shippingCost,
        agentPayment,
        auctionSheetid,
        auctionSheet,
        invoiceNumber,
        bank,
        bankEmail,
        locNum,
        cif
        
        
    });
  
    newOrder.save()
    .then(() =>res.json('Order added')) 
    .catch(err => res.status(400).json('Error:' + err));


    


}
);



router.get('/:id',(req,res)=>{
  Order
  .findById(req.params.id)
  .then(order=>res.json(order))
  .catch(err=>res.status(400).json(`Error: ${err}`))

});

router.route('/:id').delete((req,res)=>{
    Order.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Order deleted.'))
    .catch(err=>res.status(400).json('error'+ err));
})

router.put('/update/:id').post((req,res)=>{
    Order.findById(req,params.id)
    .then(order =>{
        order.orderId=req.body.orderId;
        order.date=Date.parse(req.body.date);
        order.payment=Number(req.body.payment);
        order.agent=req.body.agent;
        order.shipper=req.body.shipper;
        order.user=req.body,user;
        order.customer=req.body.customer;
        order.insurancecost=req.body.insurancecost;
        order.shippingcost=req.body.shippingcost;
        order.agentpayment=req.body.agentpayment;

        
 order.save()
 .then(()=> res.json('order updated'))
 .catch(err=>res.status(400).json('error'+ err));
})
.catch(err=>res.status(400).json('Error ' + err));
});



//nodemailer















module.exports = router;