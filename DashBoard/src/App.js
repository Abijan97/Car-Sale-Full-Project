import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route}  from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// importing components 
import axios from 'axios';
import Navbar from "./Components/navbar.component";
import EditUser from "./Components/edit-user.component";
import CreateUser from "./Components/create-user.component";
import CreateUserType from "./Components/create-usertype.component";
import UserTypesList from "./Components/usertype-list.component";
import CreateCustomers from "./Components/create.customer.component";
import CreateOrders from "./Components/create-order.component";
import CreateCustomClearance from "./Components/create-customclearance.component";
import StickyFooter from './Components/footer';
import AgentCard from './Components/Agent/agentviews';
import Agent from './Components/Agent/Agent';
import ShipperCard from './Components/Shipper/shipperviews';
import Orderviews from './Components/orders/orderviews';
import EditAgent from './Components/Agent/EditAgent';
import VehicleStock from './Components/Vehicle/view-stock';


function App() {

  const[agents,setAgents]=useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:5001/agents/')
    .then(res => setAgents(res.data))
    .catch(error=>console.log(error));

  })

  const [shippers,setShippers]=useState([]);

  useEffect(()=>{
    axios
      .get('http://localhost:5001/shippers/')
      .then(res => setShippers(res.data)) 
      .catch(error=>console.log(error));
  })
  
  //vehicles
  const [vehicles,setVehicles]=useState([]);

  useEffect(()=>{
    axios
      .get('http://localhost:5001/shippers/')
      .then(res => setVehicles(res.data)) 
      .catch(error=>console.log(error));
  })
  
  

 

  return (
    <div>
    
    <Router>
      
    <Navbar/>
  
  

    <Route path="/agentcard" exact component={AgentCard}/>
    <Route path="/edit/:id" exact component={EditUser} />
    <Route path="/create" exact component={CreateUser} />
    <Route path="/usertypes" exact component={CreateUserType} />
    <Route path="/createusertype" exact component={UserTypesList}/>
    <Route path="/agents" render={()=><AgentCard agents={agents}/>}/>
    <Route path="/vehicles" render={()=><VehicleStock vehicles={vehicles}/>}/>
   <Route path="/shippers" render={()=><ShipperCard shippers={shippers}/>}/>
    <Route path="/agent/:id" render={(props)=><Agent {...props} agents={agents}/>} />
    <Route path="/update/:id" render={(props)=><EditAgent {...props} agents={agents}/>} />
    <Route path="/customers" exact component={CreateCustomers}/>
    <Route path="/orders" exact component={CreateOrders}/>
    <Route path="/customclearances" exact component={CreateCustomClearance}/>
    <Route path="/orderviews" exact component={Orderviews}/>
  


    
    <StickyFooter/>
    
  
    </Router>
    </div>
  );
}

export default App;
