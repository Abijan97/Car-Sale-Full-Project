import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert";


const Agent =props=> (

    <tr>
        <td>{props.Vehicle.vehicleId}</td>
        <td>{props.Vehicle.marketPrize}</td>
        <td>{props.Vehicle.orderId}</td>
        <td>{props.Vehicle.modelName}</td>
        
        <td>
         {/* <a className="btn btn-danger" href="#" onClick={()=>{props.deleteAgent(props.Vehicle._id) }}> delete</a>  */}
         <a className="btn btn-danger" href="#" onClick={()=>{
           swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              {props.deleteAgent(props.Vehicle._id) };
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
            
              });

            } else {
              swal("Your imaginary file is safe!");
            }
          });
          

          }}> delete</a> 
            
        </td>
    </tr>
)

export default class StockList extends Component {
    constructor(props) {
      super(props); 
  
      this.deleteVehicle = this.deleteVehicle.bind(this)
  
      this.state = {stocks: []};
    }
    
    componentDidMount() {
      axios.get('http://localhost:5001/stocks/')
        .then(response => {
          this.setState({ stocks: response.data })
        })
        .catch((error) => {
          console.log(error); 
        })
    }
    
    deleteVehicle(id) {
      axios.delete('http://localhost:5001/stocks/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        stocks: this.state.stocks.filter(el => el._id !== id)
      })
    }
  stocksList(){
      return this.state.stocks.map(currentVehicle=>{
          return <Agent Vehicle={currentVehicle} deleteVehicle={this.deleteAgent} key={currentVehicle._id}/>

      })
  } 

render(){
    return (
        <div className="container border  pt-5 pb-5">
          <div className="pl-2">
        <h3 className="text-primary">Vehile Stock</h3><br></br>
        </div>
        <div>
        <table className="table table-boarded table-striped table-dark">
          <thead className="thead-light">
            <tr className="">
              <th>Vehicle ID</th>
              <th>Market Prize</th>
              <th>Order Id</th>
              <th>Model Name</th>
              

              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            { this.stocksList() } 
          </tbody>
        </table>
        </div>
      </div>
    
    )
}
}
