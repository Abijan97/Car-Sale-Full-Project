import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route}  from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer.component';
import AgentCard from './Components/Agents/agent-view.component';
import ShipperCard from './Components/Shippers/shipper-view.component';
import VehicleCard from './Components/vehicles/vehicle-view.component';


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
  
//veicles

  const [vehicles,setVehicles]=useState([]);

  useEffect(()=>{
    axios
      .get('http://localhost:5001/vehicles/')
      .then(res => setVehicles(res.data)) 
      .catch(error=>console.log(error));
  })






  return (
    <div>
      <Router>
      <Navbar/>
      <Route path="/agents" render={()=><AgentCard agents={agents}/>}/>
      <Route path="/shippers" render={()=><ShipperCard shippers={shippers}/>}/>
      <Route path="/vehicles" render={()=><VehicleCard vehicles={vehicles}/>}/>




      <Footer/>

      </Router>
     




    </div>
  );
}

export default App;
