import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Shipper =props=> (

    <tr>
        <td>{props.shipper.shipperId}</td>
        <td>{props.shipper.shipperName}</td>
        
        <td>
         <a className="btn btn-danger" href="#" onClick={()=>{props.deleteShipper(props.shipper._id) }}> delete</a> 
            
        </td>
    </tr>
)


export default class AgentList extends Component {
    constructor(props) {
      super(props); 
  
      this.deleteShipper = this.deleteShipper.bind(this)
  
      this.state = {shippers: []};
    }
    
    componentDidMount() {
      axios.get('http://localhost:5001/shippers/')
        .then(response => {
          this.setState({ shippers: response.data })
        })
        .catch((error) => {
          console.log(error); 
        })
    }
    
    deleteShipper(id) {
      axios.delete('http://localhost:5001/shippers/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        shippers: this.state.shippers.filter(el => el._id !== id)
      })
    }
  shipperList(){
      return this.state.shippers.map(currentshipper=>{
          return <Shipper shipper={currentshipper} deleteShipper={this.deleteShipper} key={currentshipper._id}/>

      })
  } 

render(){
    return (
        <div>
        <h3>Shipper</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Shipper ID</th>
              <th>Shipper Name</th>

              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            { this.shipperList() } 
          </tbody>
        </table>
      </div>
    
    )
}
}
