const router = require('express').Router();
let Receiving = require('../models/receiving.model');

const multer= require('multer');

const nodemailer=require('nodemailer');
const hbs=require('nodemailer-handlebars');
const log = console.log;

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

    let transporter=nodemailer.createTransport({
      service:'gmail',
      secure:false,

      auth:{
        user:'abijanudara97@gmail.com',
        pass:'0332256411'

      }, 
      tls:{ 
        rejectUnauthorized:false
      }
    });
    //
    transporter.use('compile', hbs({
      viewEngine: {
        extname: '.handlebars',
        layoutsDir: './views/',
        defaultLayout : 'receiving',
    },
    viewPath: './views/'
  }));
  
  
      //mail step 3

      let mailOptions = {
        from: 'abijanudara97@gmail.com', 
        to: agentEmail,
        subject: 'Order Receiving Details',
        text: 'Please Check and confirm theese',
        attachments:[
          {filename:'bl.jpg',path:'./views/bl.jpg'},
          {filename:'delivery.jpg',path:'./views/delivery.jpg'}
        ],
        template: 'receiving',
        context: {
          orderId:orderId,
          shippedDate:shippedDate,
          customAgent:customAgent,
          deliveryOrder:deliveryOrder,
          hsCode:hsCode
        
        }
    };

  //step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs',err);
    }
    return log('Email sent!!!');
});

}
);

router.route('/:id').get((req,res)=>{
    Receiving.findById(req.params.id)
    .then(receiving => res.json(receiving))
    .catch(err => res.status(400).json('Error :'+ err));

});


router.route('/:id').delete((req,res)=>{
  Receiving.findByIdAndDelete(req.params.id)
  .then(()=>res.json('Receiving deleted.')) 
  .catch(err=>res.status(400).json('error'+ err));
})
//second endpoint

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