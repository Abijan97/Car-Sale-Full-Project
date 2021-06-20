
import React, {Component} from 'react';
import AgentList from "./agent-list.component";
//send http request to backend (connect to backend)
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
//alert
import swal from 'sweetalert';

export default class CreateAgent extends Component{

    constructor(props){
        super(props);

        //hard coding a single user

            
        

        //binding this keyword to class
        
        this.onChangeAgentId=this.onChangeAgentId.bind(this);
        this.onChangeAgentName=this.onChangeAgentName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeMobile=this.onChangeMobile.bind(this);
        this.onChangeCompany=this.onChangeCompany.bind(this);
        this.onChangeImage=this.onChangeImage.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        this.validator = new SimpleReactValidator();


        this.state={
            agentId: '',
            agentName:'',
            email:'',
            mobile:'',
            company:'',
            image:''



        }

        
    }

    
    onChangeImage(e){
        this.setState({
            image:e.target.files[0]
        })
    }
      
    

    onChangeAgentId(e){
        this.setState({
            agentId:e.target.value
        })
    };

    onChangeAgentName(e){
        this.setState({
            agentName:e.target.value
        })
    };
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    };

    onChangeCompany(e){
        this.setState({
            company:e.target.value
        })
    };

    onChangeMobile(e){
        this.setState({
            mobile:e.target.value
        })
    };


   


    onSubmit(e){
        e.preventDefault();

        const agent = {
            agentId:this.state.agentId,
            agentName:this.state.agentName,
            email:this.state.email,
            mobile:this.state.mobile,
            company:this.state.company,
            image:this.state.image
        }
        console.log(agent);

        axios.post('http://localhost:5001/agents/add',agent)
        .then(res=>console.log(res.data));

        this.setState({
            agentId:'',
            agentName:'',
            email:'',
            mobile:'',
            company:'',
            image:''
        })
        //refresh page and give a alert
        swal("Add new agent?")
        .then((value) => {
        //   document.location.reload();
});
        
        // document.AgentList.reload()
        
    
        // swal("Done!", "You added a agent!", "success");

        
        //refresh the page 
      
        
          

        
    }

    render(){
        return(
            <div className="container">
                <div className="row">
            <div className="col-4 bg-light pb-5 pt-5 border">
                
            <h3 className="text-primary">Add Agent</h3>
            <form onSubmit={this.onSubmit}  encType='multipart/form-data'>
              <div className="form-group"> 
                <label>Agent ID : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.agentId}
                    onChange={this.onChangeAgentId}
                    onBlur={()=>this.validator.showMessageFor('Agent ID')}
                    />
                    {this.validator.message('Agent ID', this.state.agentId, 'required', { className: 'text-danger' })}
              </div>

              <div className="form-group"> 
                <label>Agent Name : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.agentName}
                    onChange={this.onChangeAgentName}
                    onBlur={()=>this.validator.showMessageFor('Shipper Name')}
                    />
                    {this.validator.message('Agent Name', this.state.agentName, 'required', { className: 'text-danger' })}
              </div>

              <div className="form-group"> 
          <label>Agent Company</label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.company}
              onChange={this.onChangeCompany}>
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
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    onBlur={()=>this.validator.showMessageFor('email')}
                    />
                    {this.validator.message('Email', this.state.email, 'required|email', { className: 'text-danger' })}
              </div>
            
              <div className="form-group"> 
                <label>Mobile </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.agentMobile}
                    onChange={this.onChangeMobile}
                    onBlur={()=>this.validator.showMessageFor('Mobile')}
                    />
                    {this.validator.message('mobile', this.state.agentMobile, 'required|phone', { className: 'text-danger' })}
              </div>
              <div className="form-group"> 
                <label>Image </label>
                <input  type="file"
                name="image"
                    
                    className="form-control"
                
                    onChange={this.onChangeImage}
                   
                    />

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
}