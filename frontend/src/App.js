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
import OrderCard from './Components/Orders/orderview.component';
import CustomerCard from './Components/Customers/customer-view.component';
import UserCard from './Components/User/user-view.component';
import AuctionSheet from './Components/Orders/order';
import ReceivingCard from './Components/Receivings/view-receivings.component';
import ReceivingSingle from './Components/Receivings/receiving';
import CreateTaxes from './Components/Taxes/create-taxes.component';
import Home from './Components/home';
import CreateSales from './Components/Sales/create-sale.component';
import SaleCard from './Components/Sales/view-sales.component';
import MTA from './Components/Sales/sale';
import EditAgent from './Components/Agents/updateAgent';
function App() {



  return (
    <div>
      <Router>
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/agents" exact component={AgentCard}/>
      <Route
       path="/agent/:id" render={(props)=><AgentSingle {...props}/>} />
       <Route
       path="/agent/update/:id" render={(props)=><EditAgent {...props}/>} />
      <Route path="/shippers" exact component={ShipperCard}/>
      <Route path="/vehicles" exact component={VehicleCard}/>
      <Route path="/orders"  exact component={OrderCard}/>
      <Route
       path="/order/:id" render={(props)=><AuctionSheet {...props}/>} />
      <Route path="/tests" exact component={CreateTest}/>
      <Route path="/customers" exact component={CustomerCard}/>
      <Route path="/users" exact component={UserCard}/>
      <Route path="/receivings" exact component={ReceivingCard}/>
      <Route
       path="/receiving/:id" render={(props)=><ReceivingSingle {...props}/>} />
      <Route path="/taxes" exact component={CreateTaxes}/>
      <Route path="/sales" exact component={SaleCard}/>
      <Route
       path="/sale/:id" render={(props)=><MTA {...props}/>} />
      <Route path="/add" exact component={CreateSales}/>

      <Footer/>

      </Router>


    </div>
  );
}

export default App;
