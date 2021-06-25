
import React, {useState} from 'react';
import AgentList from "./agent-list.component";
//send http request to backend (connect to backend)
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
//alert
import swal from 'sweetalert';

const CreateAgent=()=>{
    
        
         var formData = new FormData();


        const [agentId,setAgentId]=useState("");
        const [agentName,setAgentName]=useState("");
        const [email,setEmail]=useState("");
        const [mobile,setMobile]=useState("");
        const [company,setCompany]=useState("");
        const [filename,setFilename]=useState("");


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
            .post('http://localhost:5001/agents/add',formData)
            .then(res=>console.log(res.data))
            .catch((err)=>{
                console.log(err); 
               
            
            });


        
        };

      
        
          

        
    

    
        return(
            <div className="container">
                <div className="row">
            <div className="col-4 bg-light pb-5 pt-5 border">
                
            <h3 className="text-primary">Add Agent</h3>


            <form onSubmit={changeonClick}  encType='multipart/form-data'>
              <div className="form-group"> 
                <label>Agent ID : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={agentId}
                    onChange={(e)=>setAgentId(e.target.value)}
                    
                    />
              
              </div>

              <div className="form-group"> 
                <label>Agent Name : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={agentName}
                    onChange={(e)=>setAgentName(e.target.value)}
            
                    />
                
              </div>

              <div className="form-group"> 
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

            
              <div className="form-group"> 
                <label>Email </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
            
                    />
                    
              </div>
            
              <div className="form-group"> 
                <label>Mobile </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
            
                    />
            
              </div>
              <div className="form-group"> 
                <label htmlFor="file">Image </label>
                <input
                type="file"
                className="form-control-file"
                onChange={onChangeFile}
                filename="agentImage"/>
              </div>

            <br></br>
              


              <div className="form-group"> 
                <input type="submit"  value="Create Agent" className="btn btn-primary" />
              </div>
            </form>

            </div>
 
            <div className="col-8 bg-light">
            
               <AgentList/>
            </div>
            </div>
          </div>
        )
    }


export default CreateAgent;