import React,{Component} from 'react';
import axios from 'axios';
import swal from "sweetalert";
import VehicleModelList from './vehiclemodel-list.component';


export default class AddVehicles extends Component{

    constructor(props){
        super(props);

        this.onChangeModelName = this.onChangeModelName.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeFueltype = this.onChangeFueltype.bind(this);
        this.onChangeSeats = this.onChangeSeats.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);
    

        this.state={
            modelName: '',
    
            company:'',
            fueltype:'',
            seats:'',
            capacity:'',
           

           
        }
    }



    onChangeModelName(e){
        this.setState({
            modelName: e.target.value
        });
    } 
   
    onChangeCompany(e){
        this.setState({
            company: e.target.value
        });
    }
    onChangeFueltype(e){
        this.setState({
            fueltype: e.target.value
        });
    }
    onChangeSeats(e){
        this.setState({
            seats: e.target.value
        });
    }

    onChangeCapacity(e){
        this.setState({
            capacity: e.target.value
        });
    }
   
  

    onSubmit(e){
        e.preventDefault( );

        const vehicle={
           modelName: this.state.modelName,
        
           company:this.state.company,
           fueltype:this.state.fueltype,
           seats:this.state.seats,
           capacity:this.state.capacity,
           
    }

    console.log(vehicle);

    axios.post('http://localhost:5001/vehicles/add',vehicle)
    .then(res=>console.log(res.data))
    .catch(error=>{
        console.log(error.response);
    })

    this.setState({
        modelName:'',
        company:'',
        fueltype:'',
        seats:'',
        capacity:'',
       
    })

    swal("Add new agent?")
    .then((value) => {
      document.location.reload();
});


};






render() {
    return (
      //adding a modal
    <div className="container">


      <div className="row">
        <div className="col-4 bg-light border pt-5 pb-5  ">
      <h3>Add Vehicle Model</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
        <label>Model Name</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.modelName}
              onChange={this.onChangeModelName}
              />  
        </div>


        <div className="form-group"> 
          <label>Company </label>
          <select ref="userInput" 
              type="text" 
              className="form-control"
              value={this.state.company}
              onChange={this.onChangeCompany}
              >  
               <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Kia">Kia</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>

                

    </select>
    </div>
             
        <div className="form-group"> 
          <label>Fuel type </label>
          <select ref="userInput" 
              type="text" 
              className="form-control"
              value={this.state.fueltype}
              onChange={this.onChangeFueltype}
              >  
               <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>

    </select>
              
        </div>
        <div className="form-group"> 
          <label>Seats </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.seats}
              onChange={this.onChangeSeats}
              />  
        </div>
        <div className="form-group"> 
          <label>capacity</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.capacity}
              onChange={this.onChangeCapacity}
              />  
        </div>





                <br></br>
       


        <div className="form-group">
          <input type="submit" value="Create Order" className="btn btn-primary" />
        </div>
      </form>
      </div>
      

      
    
        <div className="col-8 bg-light pt-5 pb-5 border">
        
              <VehicleModelList/>
              
              </div>
      </div>
      </div>
    
    )
  }
}
