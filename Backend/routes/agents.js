const router = require('express').Router();
//require agent model
let Agent = require('../models/agent.model');


//image
const multer= require('multer');


const storage= multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,'./uploads/')
  },
  filename:(req,file,callback)=>{
    callback(null,file.originalname)
  }
})

const upload=multer({storage:storage});


// const {v4:uuidv4}=require('uuid');
// let path = require('path');

// //image
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, '../images');
//   },
//   filename: function(req, file, cb) {   
//       cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//   if(allowedFileTypes.includes(file.mimetype)) {
//       cb(null, true);
//   } else {
//       cb(null, false);
//   }
// }

// let upload = multer({ storage, fileFilter });


router.route('/').get((req, res) => {
  Agent.find()
    .then(agents => res.json(agents))
    .catch(err => res.status(400).json('Error: ' + err));
});

//deleteusertype


router.route('/:id').delete((req,res)=>{
  Agent.findByIdAndDelete(req.params.id)
  .then(()=>res.json('Agent deleted.'))
  .catch(err=>res.status(400).json('error'+ err));
})
//second endpoint

router.route('/add').post(upload.single('agentImage'),(req, res) => {
  const agentId = req.body.agentId;
  const agentName=req.body.agentName;
  const email =req.body.email;
  const mobile = req.body.mobile;
  const company =req.body.company;
  const agentImage=req.file.originalname;
  

  const newAgent = new Agent({agentId,agentName,email,mobile,company,agentImage});

  newAgent.save()
    .then(() => res.json('Agent added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;