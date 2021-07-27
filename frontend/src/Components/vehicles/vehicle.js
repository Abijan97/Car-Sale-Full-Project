import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Paper, Typography, Divider } from '@material-ui/core/';
import useStyles from '../Agents/styles.js';

//shorcut rafce


const Vehicle = props=> {
    const classes = useStyles();

    const [modelName,setModelname]=useState("");
    const [company,setCompany]=useState("");
    const[fueltype,setFueltype]=useState("");
    const[seats,setSeats]=useState("");
    const[capacity,setCapacity]=useState("");
    const[bodyStyle,setBodyStyle]=useState("");
    const[year,setYear]=useState("");
    const[mileage,setMileage]=useState("");
    const[exteriorColor,setExterior]=useState("");
    const[interiorColor,setInterior]=useState("");
    const[filename,setFilename]=useState("");
 
      
  
    useEffect(() => {
        axios
        .get(`http://localhost:5001/vehicles/${props.match.params.id}`)
        .then(res=>[
        setModelname(res.data.modelName),
    setCompany(res.data.company),
    setFueltype(res.data.fueltype),
    setSeats(res.data.seats),
    setCapacity(res.data.capacity),
    setBodyStyle(res.data.bodyStyle),
    setYear(res.data.year),
    setExterior(res.data.exteriorColor),
    setMileage(res.data.mileage),
    setInterior(res.data.interiorColor),
    setFilename(res.data.vehicleImage)
//    setFilename(res.data.setFilename)

])
.catch(error =>console.log(error))
    }, [props]);


  


    return (

        
         <div className="card w-75 p-4 m-5 bg-secondary">
            

            {!modelName ? (<CircularProgress color="secondary"/>) : (
        
 
        

    
        <div className="row">

          <div className="col-6">
          <img style={{"height": "100%", "width": "100%", "object-fit": "contain"}} alt="file" src={`/vehicles/${filename}`} width="200px" />
        </div>
        <div className="col-6 text-white">

          <Typography variant="h4" component="h4">ModelName : {modelName}</Typography>
          <Typography variant="h5" >company : {company}</Typography>
          
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2"></Typography>
         
          <Typography variant="h6">fuelType : {fueltype}</Typography>
          
          <Typography variant="body1">Number of Seats : {seats}</Typography>
          <Typography variant="body1">body Style : {bodyStyle}</Typography>

          <Typography variant="body1">Made Year : {year}</Typography>

          <Typography variant="body1">mileage : {mileage}</Typography>


                    
          <Typography variant="body1">Engine Capacity : {capacity}</Typography>
          <Typography variant="body1">Exterior Color : {exteriorColor}</Typography>

          <Typography variant="body1">interiorColor : {interiorColor}</Typography>
            <br></br>
            <Link to="/vehicles" type="submit" className="btn btn-primary">Back to the Stock</Link>
            <span> </span>
            <Link to="/vehicles" type="submit" className="btn btn-warning">Update</Link>
            <span> </span>
            <Link to="/vehicles" type="submit" className="btn btn-danger">Delete</Link>



                </div>
       
        </div>
     
    

  
    
 

          
           

    
            )}
        </div>
    
    )
}

export default Vehicle;
