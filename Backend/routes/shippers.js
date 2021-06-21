const router = require('express').Router();
//require shipper model
let Shipper = require('../models/shipper.model');
//image
const multer=require('multer');
let path= require('path')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './images');
  },
  filename: function(req, file, cb) {   
      // cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
      cb(null,Date.now()+"--"+file.originalname)
  }
});
console.log(storage.filename);
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });



//first endpoint 

router.route('/').get((req, res) => {
  Shipper.find()
    .then(shippers => res.json(shippers))
    .catch(err => res.status(400).json('Error: ' + err));
});

//deleteshipper


router.route('/:id').delete((req,res)=>{
  Shipper.findByIdAndDelete(req.params.id)
  .then(()=>res.json('Shipper deleted.'))
  .catch(err=>res.status(400).json('error'+ err));
})
//second endpoint

router.route('/add').post(upload.single('photo'),(req, res) => {
  const shipperId = req.body.shipperId;
  const shipperName=req.body.shipperName;
  const email =req.body.email;
  const mobile = req.body.mobile;
  const photo=req.file.photo;
  
  

  const newShipper = new Shipper({shipperId,shipperName,email,mobile,photo});

  newShipper.save()
    .then(() => res.json('Shipper added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;