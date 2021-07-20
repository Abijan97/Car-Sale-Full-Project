import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert2";


const Taxes =props=> (

    <tr>
        <td>{props.tax.orderId}</td>
        <td>{props.tax.receivedDate}</td>
        <td>{props.tax.cessTax}</td>
        <td>{props.tax.vat}</td>
        <td>{props.tax.customDuty}</td>
        <td>{props.tax.transportPayment}</td>
        <td>{props.tax.repairPayment}</td>
        <td>{props.tax.serviceCenter}</td>
    
        
     
    </tr>
)

export default class AgentList extends Component {
    constructor(props) {
      super(props); 

  
      this.state = {taxes: []};
    }
    
    componentDidMount() {
      axios.get('http://localhost:5001/taxes/')
        .then(response => {
          this.setState({ taxes: response.data })
        })
        .catch((error) => {
          console.log(error); 
        })
    }
    
  agentsList(){
      return this.state.taxes.map(currenttax=>{
          return <Taxes tax={currenttax}  key={currenttax._id}/>

      })
  } 

render(){
    return (
        <div className="container border  pt-5 pb-5">
          <div className="pl-2">
        <h3 className="text-primary">Agents</h3><br></br>
        </div>
        <div>
        <table className="table table-boarded table-striped table-dark">
          <thead className="thead-light">
            <tr className="">
              <th>Order Id</th>
              <th>Received Date</th>
              <th>cessTax</th>
              <th>vat</th>
              <th>customDuty</th>
              <th>transport Payment</th>
              <th>Repair Payment</th>
              <th>Service Center</th>
            
              

              

            </tr>
          </thead>
          <tbody>
            { this.agentsList() } 
          </tbody>
        </table>
        </div>
      </div>
    
    )
}
}
