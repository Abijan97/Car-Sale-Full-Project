const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');


router.route('/').get((req,res)=>{

  Vehicle.find()
  .then(vehicles=>res.json(vehicles))
  .catch(err=>res.status(400).json('Error: ' +err));
});


router.route('/add').post((req,res)=>
{
    const modelName = req.body.modelName;
    const company = req.body.company;
    const fueltype = req.body.fueltype;
    const seats =req.body.seats;
    const capacity = req.body.capacity;

   


    const newVehicle = new Vehicle({
        modelName,
        company,
        fueltype,
        seats,
        capacity
       
        
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

router.route('/update/:id').post((req,res)=>{
    Vehicle.findById(req,params.id)
    .then(vehicle =>{
        vehicle.modelName=req.body.modelName;
        vehicle.seats=req.body.seats;
        vehicle.fueltype=req.body.fueltype;
        vehicle.capacity=req.body.capacity;
        

        
 vehicle.save()
 .then(()=> res.json('vehicle updated'))
 .catch(err=>res.status(400).json('error'+ err));
})
.catch(err=>res.status(400).json('Error ' + err));
});

module.exports = router;