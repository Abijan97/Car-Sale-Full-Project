import react,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route}  from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// importing components 
import axios from 'axios';
import Navbar from "./Components/navbar.component";
import UserList from "./Components/user-list.component";
import EditUser from "./Components/edit-user.component";
import CreateUser from "./Components/create-user.component";
import CreateUserType from "./Components/create-usertype.component";
import UserTypesList from "./Components/usertype-list.component";
import CreateAgent from "./Components/create-agent.component";
import CreateShipper from "./Components/create-shipper.component";
import CreateCustomers from "./Components/create.customer.component";
import CreateOrders from "./Components/create-order.component";
import CreateCustomClearance from "./Components/create-customclearance.component";
import CreateStock from "./Components/addstock-component";
import AddVehicles from "./Components/add-vehicle.component";
import StickyFooter from './Components/footer';
import Counter from './Components/count';
import AgentCard from './Components/Agent/agentviews';
import Agent from './Components/Agent/Agent';
import ShipperCard from './Components/Shipper/shipperviews';
import Orderviews from './Components/orders/orderviews';
import EditAgent from './Components/Agent/EditAgent';

function App() {

  const[agents,setAgents]=useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:5001/agents/')
    .then(res => setAgents(res.data))
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
    <Route path="/agent/:id" render={(props)=><Agent {...props} agents={agents}/>} />
    <Route path="/update/:id" render={(props)=><EditAgent {...props} agents={agents}/>} />

    <Route path="/shippers" exact component={ShipperCard}/>
    <Route path="/customers" exact component={CreateCustomers}/>
    <Route path="/orders" exact component={CreateOrders}/>
    <Route path="/customclearances" exact component={CreateCustomClearance}/>
    <Route path="/stocks" exact component={CreateStock}/>
    <Route path="/vehicles" exact component={AddVehicles}/>
    <Route path="/orderviews" exact component={Orderviews}/>
  

    <Route path="/count" exact component={Counter} />
    
    <StickyFooter/>
    
  
    </Router>
    </div>
  );
}

export default App;
