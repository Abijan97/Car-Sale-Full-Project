
import React, {useState,useEffect} from 'react';
//send http request to backend (connect to backend)
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
//alert
import swal from 'sweetalert';


const EditAgent= props=>{
    
    useEffect(() => {
        axios
        .get(`http://localhost:5001/agents/${props.match.params.id}`)
        .then(res=>[
        setAgentId(res.data.agentId),
    setAgentName(res.data.agentName),
    setEmail(res.data.email),
    setMobile(res.data.mobile),
    setCompany(res.data.company),
    setFilename(res.data.setFilename)

])
.catch(error =>console.log(error))
    });
        
    
    var formData = new FormData();


        const [agentId,setAgentId]=useState("");
        const [agentName,setAgentName]=useState("");
        const [email,setEmail]=useState("");
        const [mobile,setMobile]=useState("");
        const [company,setCompany]=useState("");
        const [filename,setFilename]=useState("");
        const [message,setMessage]=useState("");

        const onChangeFile =e => {
            setFilename(e.target.files[0]);
        }

        const changeonClick = e => {
            e.preventDefault();

            const formData=new FormData();

            formData.append("agentId",agentId);
            formData.append("agentName",agentName);
            formData.append("email",email);
            formData.append("mobile",mobile);
            formData.append("company",company);
            formData.append("agentImage",filename);

          
            
            axios
            .put(`http://localhost:5001/agents/update/${props.match.params.id}`,formData)
            .then(res=>console.log(res.data))
            .catch((err)=>{
                console.log(err); 
               
            
            });
         

        
        };
       
    

      
        
          

        
    

    
        return(
    
          

            <div className="container mt-5 col-6">
            <form onSubmit={changeonClick}  encType='multipart/form-data'>
                <h1 className="form-group">Edit Agents</h1><br></br>
              <div className="form-group mb-3"> 
                <label>Agent ID : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={agentId}
                    onChange={(e)=>setAgentId(e.target.value)}
                    
                    />
              
              </div>

              <div className="form-group mb-3"> 
                <label>Agent Name : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={agentName}
                    onChange={(e)=>setAgentName(e.target.value)}
            
                    />
                
              </div>

              <div className="form-group mb-3"> 
          <label>Agent Company</label>
          <select
              required
              className="form-control"
              value={company}
              onChange={(e)=>setCompany(e.target.value)}>
                  <option>AUTO SUPPLY JAPAN</option>
                  <option>KOYO TRADING</option>
                  <option>JAPAN CAR DIRECT LLC</option>
                  <option>JAPAN TRADING</option>
          </select>
        </div> 

            
              <div className="form-group mb-3"> 
                <label>Email </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
            
                    />
                    
              </div>
            
              <div className="form-group mb-3"> 
                <label>Mobile </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
            
                    />
            
              </div>
              <div className="form-group mb-3"> 
                <label htmlFor="file">Image </label>
                <input
                type="file"
                className="form-control-file"
                onChange={onChangeFile}
                filename="agentImage"/>
              </div>

            <br></br>
              


              <div className="form-group mb-3"> 
                <input type="submit"  value="Submit" className="btn btn-primary" />
              </div>
            </form>
            </div>

       
        )
    }


export default EditAgent;