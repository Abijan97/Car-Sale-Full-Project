import React,{useState} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";



const VehicleAdd=()=>{

    const [modelName,setModelname]=useState("");
    const [company,setCompany]=useState("");
    const[fuelType,setFueltype]=useState("");
    const[seats,setSeats]=useState("");
    const[capacity,setCapacity]=useState("");
    const[filename,setFilename]=useState("");
    
   
    const onChangeFile=e=>{

      setFilename(e.target.files[0]);

    }



    
    const changeonClick = e => {
      e.preventDefault();

      const formData=new FormData();

      formData.append("modelName",modelName);
      formData.append("company",company);
      formData.append("fuelType",fuelType);
      formData.append("seats",seats);
      formData.append("capacity",capacity);
      formData.append("vehicleImage",filename);

    
      
      axios
      .post('http://localhost:5001/vehicles/add',formData)
      .then(res=>console.log(res.data))
      .catch((err)=>{
          console.log(err); 
         
      
      });



      
    
      Swal.fire({

        position: 'top-end',
        icon: 'success',
        title: 'Agent Saved',
        showConfirmButton: false,
        timer: 1500
      })
      

      setModelname('');
      setFueltype('');
      setSeats('');
      setCapacity('');
      setCompany('');
      setFilename('');

  
  };




    return (
      //adding a modal
    
      <form onSubmit={changeonClick} encType='multipart/form-data'>
        <div className="form-group mb-3"> 
        <label>Model Name :</label>
          <input 
              type="text" 
              className="form-control"
              value={modelName}
              onChange={(e)=>setModelname(e.target.value)}
              />  
        </div>


        <div className="form-group mb-3"> 
          <label>company :</label>
          <select ref="userInput" 
              type="text" 
              className="form-control"
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
              >  
               <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Kia">Kia</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>

                

    </select>
    </div>
             
        <div className="form-group mb-3"> 
          <label>Fuel type </label>
          <select ref="userInput" 
              type="text" 
              className="form-control"
              value={fuelType}
              onChange={(e)=>setFueltype(e.target.value)}
              >  
               <option value="Diesel">Diesel</option>
               <option value="Petrol">Petrol</option>

    </select>
              
        </div>
        <div className="form-group mb-3"> 
          <label>Seats </label>
          <input 
              type="text" 
              className="form-control"
              value={seats}
              onChange={(e)=>setSeats(e.target.value)}
              />  
        </div>
        <div className="form-group mb-3"> 
          <label>capacity</label>
          <input 
              type="text" 
              className="form-control"
              value={capacity}
              onChange={(e)=>setCapacity(e.target.value)}
              />  
        </div>

        <div className="form-group mb-3"> 
                <label htmlFor="file">Vehicle Image </label>
                <input
                type="file"
                className="form-control-file"
                onChange={onChangeFile}
                filename="vehicleImage"/>
              </div>




                <br></br>
       


        <div className="form-group mb-3">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    
    
    )
  
}


export default VehicleAdd;