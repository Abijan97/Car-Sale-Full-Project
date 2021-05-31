import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
  <tr>
    <td>{props.order.orderId}</td>
    <td>{props.order.date.substring(0,10)}</td>
    <td>{props.order.payment}</td>
    <td>{props.order.agent}</td>
    <td>{props.order.shipper}</td>
    <td>{props.order.user}</td>
    <td>{props.order.customer}</td>

   
    <td>
   <a className="btn btn-danger" href="#" onClick={() => { props.deleteOrder(props.order._id) }}>delete</a> 
    </td>
  </tr>
)

export default class OrdersList extends Component {
  constructor(props) {
    super(props);

    this.deleteOrder = this.deleteOrder.bind(this)

    this.state = {orders: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/orders/')
      .then(response => {
        this.setState({ orders: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteOrder(id) {
    axios.delete('http://localhost:5001/orders/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
    })
  }

  ordersList() {
    return this.state.orders.map(currentorder => {
      return <Order order={currentorder} deleteOrder={this.deleteOrder} key={currentorder._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Orders Placed</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Agent</th>
              <th>Shipper</th>
              <th>Manager</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
            { this.ordersList() }
          </tbody>
        </table>
      </div>
    )
  }
}