import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import OrdersList from "./order.list.component";
import swal from "sweetalert";

export default class CreateOrders extends Component{

    constructor(props){
        super(props);

        this.onChangeOrderId = this.onChangeOrderId.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePayment = this.onChangePayment.bind(this);
        this.onChangeAgent = this.onChangeAgent.bind(this);
        this.onChangeShipper = this.onChangeShipper.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeCustomer = this.onChangeCustomer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    

        this.state={
            orderId: '',
            date:new Date(),
            payment:0,
            agent:'',
            shipper:'',
            user:'',
            customer:'',

            agents:[],
            shippers:[],
            customers:[],
            users:[] 
        }
    }

    componentDidMount(){
     axios.get('http://localhost:5001/users/')
     .then(Response=>{
         if(Response.data.length>0){
             this.setState({
                 users:Response.data.map(user=>user.username),
                 username:Response.data[0].username 
             })
         }
     })

     axios.get('http://localhost:5001/agents/')
     .then(Response=>{
         if(Response.data.length>0){
             this.setState({
                 agents:Response.data.map(agent=>agent.agentId),
                 agentId:Response.data[0].agentId 
             })
         }
     })

     axios.get('http://localhost:5001/shippers/')
     .then(Response=>{
         if(Response.data.length>0){
             this.setState({
                 shippers:Response.data.map(shipper=>shipper.shipperId),
                 shipperId:Response.data[0].shipperId 
             })
         }
     })
     axios.get('http://localhost:5001/customers/')
     .then(Response=>{
         if(Response.data.length>0){
             this.setState({
                 customers:Response.data.map(customer=>customer.username),
                 username:Response.data[0].username 
             })
         }
     })
     

    }

    onChangeOrderId(e){
        this.setState({
            orderId: e.target.value
        });
    } 
    onChangeDate(date){
        this.setState({
            date:date
        });
    }
    onChangePayment(e){
        this.setState({
            payment: e.target.value
        });
    }
    onChangeAgent(e){
        this.setState({
            agent: e.target.value
        });
    }
    onChangeShipper(e){
        this.setState({
            shipper: e.target.value
        });
    }

    onChangeUser(e){
        this.setState({
            user: e.target.value
        });
    }
    onChangeCustomer(e){
        this.setState({
            customer: e.target.value
        });
    }
  

    onSubmit(e){
        e.preventDefault( );

        const order={
           orderId: this.state.orderId,
           date:this.state.date,
           payment:this.state.payment,
           agent:this.state.agent,
           shipper:this.state.shipper,
           user:this.state.user,
           customer:this.state.customer
    }

    console.log(order);

    axios.post('http://localhost:5001/orders/add',order)
    .then(res=>console.log(res.data))
    .catch(error=>{
        console.log(error.response);
    })

    this.setState({
        orderId:'',
        payment:'',
        agent:'',
        shipper:'',
        user:'',
        customer:''
    })

    swal("Add new order?")
    .then((value) => {
      document.location.reload();
});


}



render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-4 bg-light border pt-5 pb-5  ">
      <h3>Add Vehicle Order</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
        <label>Order ID </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.orderId}
              onChange={this.onChangeOrderId}
              />  
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group"> 
        <label>Payment</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.payment}
              onChange={this.onChangePayment}
              />  
        </div>

        <div className="form-group"> 
          <label>Agent </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.agent}
              onChange={this.onChangeAgent}>
              {
                this.state.agents.map(function(agent) {
                  return <option 
                    key={agent}
                    value={agent}>{agent}
                    </option>;
                })
              }
          </select>
        </div>
        
        <div className="form-group"> 
          <label>Shipper </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.shipper}
              onChange={this.onChangeShipper}>
              {
                this.state.shippers.map(function(shipper) {
                  return <option 
                    key={shipper}
                    value={shipper}>{shipper}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group"> 
          <label>Manager </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.user}
              onChange={this.onChangeUser}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group"> 
          <label>Customer </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.customer}
              onChange={this.onChangeCustomer}>
              {
                this.state.customers.map(function(customer) {
                  return <option 
                    key={customer}
                    value={customer}>{customer}
                    </option>;
                })
              }
          </select>
        </div>




                <br></br>
       


        <div className="form-group">
          <input type="submit" value="Create Order" className="btn btn-primary" />
        </div>
      </form>
      </div>
      

      
    
        <div className="col-8 bg-light pt-5 pb-5 border">
        
              <OrdersList/>
              
              </div>
      </div>
      </div>
    
    )
  }
}
