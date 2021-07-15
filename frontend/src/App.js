import React from 'react';
import {BrowserRouter as Router,Route}  from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer.component';
import AgentCard from './Components/Agents/agent-view.component';
import ShipperCard from './Components/Shippers/shipper-view.component';
import VehicleCard from './Components/vehicles/vehicle-view.component';
import AgentSingle from './Components/Agents/agent';
import CreateTest from './Components/test.component';
//import OrderCard from './Components/Orders/orderview.component';
import CreateOrders from './Components/Orders/create-order.component';
import CustomerCard from './Components/Customers/customer-view.component';
function App() {







  return (
    <div>
      <Router>
      <Navbar/>
      <Route path="/agents" exact component={AgentCard}/>
      <Route
       path="/agent/:id" render={(props)=><AgentSingle {...props}/>} />
      <Route path="/shippers" exact component={ShipperCard}/>
      <Route path="/vehicles" exact component={VehicleCard}/>
      <Route path="/orders"  exact component={CreateOrders}/>
      <Route path="/tests" exact component={CreateTest}/>
      <Route path="/customers" exact component={CustomerCard}/>


      <Footer/>

      </Router>


    </div>
  );
}

export default App;
