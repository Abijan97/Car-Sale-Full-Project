
import React, {useState,useRef} from 'react';
//send http request to backend (connect to backend)
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';

//alert
import Swal from 'sweetalert2'


const CreateAgent=()=>{
    

         


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

          
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Agent Saved',
              showConfirmButton: false,
              timer: 1500
            })
            

            setAgentName('');
            setAgentId('');
            setCompany('');
            setEmail('');
            setMobile('');
            setFilename('');

        
        };

      
        
        const simpleValidator = useRef(new SimpleReactValidator())


        
    

    
        return(
    
          


            <form onSubmit={changeonClick}  encType='multipart/form-data'>
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
                    name="agentName"
                    className="form-control"
                    value={agentName}
                    onChange={(e)=>setAgentName(e.target.value)}
                    onBlur={()=>simpleValidator.current.showMessageFor('agentName')}
            
                    />
                {simpleValidator.current.message('agentName',agentName, 'required|max:15|min:5',{className:'text-danger'})}
                
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
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    onBlur={()=>simpleValidator.current.showMessageFor('email')}
            
                    />
                     {simpleValidator.current.message('email',email, 'required|email',{className:'text-danger'})}
                    
              </div>
            
              <div className="form-group mb-3"> 
                <label>Mobile </label>
                <input  type="text"
                    required
                    name="mobile"
                    className="form-control"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    onBlur={()=>simpleValidator.current.showMessageFor('mobile')}
            
                    />
                    {simpleValidator.current.message('mobile',mobile, 'required|phone',{className:'text-danger'})}

            
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

       
        )
    }


export default CreateAgent;