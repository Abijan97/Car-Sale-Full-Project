const router = require('express').Router();
//require usertype model
let UserType = require('../models/usertype.model');

//first endpoint 

router.route('/').get((req, res) => {
  UserType.find()
    .then(usertypes => res.json(usertypes))
    .catch(err => res.status(400).json('Error: ' + err));
});

//second endpoint

router.route('/add').post((req, res) => {
  const usertypeId = req.body.usertypeId;
  

  const newUserType = new UserType({usertypeId});

  newUserType.save()
    .then(() => res.json('User type added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;