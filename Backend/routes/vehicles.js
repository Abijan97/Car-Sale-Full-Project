const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');



//image
const multer= require('multer');


const storage= multer.diskStorage({
  destination:(req,file,callback)=>{
  //  callback(null,'./uploads/')
  callback(null,'./../frontend/public/vehicles/');
  },
  filename:(req,file,callback)=>{
    callback(null,file.originalname)
  }
})

const upload=multer({storage:storage});







router.route('/').get((req,res)=>{

  Vehicle.find()
  .then(vehicles=>res.json(vehicles))
  .catch(err=>res.status(400).json('Error: ' +err));
});


router.route('/add').post(upload.single('vehicleImage'),(req,res)=>
{
    const modelName = req.body.modelName;
    const company = req.body.company;
    const fueltype = req.body.fueltype;
    const seats =req.body.seats;
    const capacity = req.body.capacity;
    const bodyStyle=req.body.capacity;
    const year=req.body.year;
    const mileage=req.body.mileage;
    const exteriorColor=req.body.exteriorColor;
    const interiorColor=req.body.interiorColor;
    const vehicleImage=req.file.originalname;

   


    const newVehicle = new Vehicle({
        modelName,
        company,
        fueltype,
        seats,
        capacity,
        bodyStyle,
        year,
        mileage,
        exteriorColor,
        interiorColor,
        vehicleImage
       
        
    });
  
    newVehicle.save()
    .then(() =>res.json('Vehicle added')) 
    .catch(err => res.status(400).json('Error:' + err));

}
);

router.route('/:id').get((req,res)=>{
    Vehicle.findById(req,params.id)
    .then(vehicle => res.json(vehicle))
    .catch(err => res.status(400).json('Error :'+ err));

});

router.route('/:id').delete((req,res)=>{
    Vehicle.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Vehicle deleted.'))
    .catch(err=>res.status(400).json('error'+ err));
})

router.put('/update/:id',(req,res)=>{
    Vehicle.findById(req,params.id)
    .then(vehicle =>{
        vehicle.modelName=req.body.modelName;
        vehicle.seats=req.body.seats;
        vehicle.fueltype=req.body.fueltype;
        vehicle.capacity=req.body.capacity;
        vehicle.bodyStyle=req.body.bodyStyle;
        vehicle.year=req.body.year;
        vehicle.mileage=req.body.mileage;
        vehicle.exteriorColor=req.body.exteriorColor;
        vehicle.interiorColor=req.body.interiorColor;
        vehicle.vehicleImage=req.file.originalname;
        

    
 vehicle.save()
 
 .then(()=> res.json('vehicle updated'))
 .catch(err=>res.status(400).json('error'+ err));
})
.catch(err=>res.status(400).json('Error ' + err));
});

module.exports = router;
 
