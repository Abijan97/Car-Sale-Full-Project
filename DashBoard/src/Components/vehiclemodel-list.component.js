import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";
const Vehicle = props => (
  <tr>
    <td>{props.vehicle.modelName}</td>
    <td>{props.vehicle.company}</td>
    <td>{props.vehicle.fueltype}</td>
    <td>{props.vehicle.seats}</td>
    <td>{props.vehicle.capacity}</td>


   
    <td>
   <a className="btn btn-danger" href="#" onClick={() => { 
     swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        {props.deleteVehicle(props.vehicle._id) };
        swal("Poof! vehicle model has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    }}>delete</a> 
    </td>
  </tr>
)

export default class VehicleModelList extends Component {
  constructor(props) {
    super(props);

    this.deleteVehicle = this.deleteVehicle.bind(this)

    this.state = {vehicles: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/vehicles/')
      .then(response => {
        this.setState({ vehicles: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteVehicle(id) {
    axios.delete('http://localhost:5001/vehicles/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      vehicles: this.state.vehicles.filter(el => el._id !== id)
    })
  }

  vehiclesList() {
    return this.state.vehicles.map(currentVehicle => {
      return <Vehicle vehicle={currentVehicle} deleteVehicle={this.deleteVehicle} key={currentVehicle._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Vehicle Models List</h3>
        <table className="table table-striped table-dark table-boarded">
          <thead className="thead-light">
            <tr>
              <th>Model Name</th>
              <th>Company</th>
              <th>Fuel Type</th>
              <th>Seats</th>
              <th>Capacity</th>
              <th>Actions</th>
             
            </tr>
          </thead>
          <tbody>
            { this.vehiclesList() }
          </tbody>
        </table>
      </div>
    )
  }
}