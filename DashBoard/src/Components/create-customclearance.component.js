import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CustomClearanceList from "./customclearance-list.component";
import swal from "sweetalert";



export default class CreateCustomClearance extends Component{

    constructor(props){
        super(props);

        this.onChangeOrderId = this.onChangeOrderId.bind(this);
        this.onChangeLc = this.onChangeLc.bind(this);
        this.onChangeInvoice = this.onChangeInvoice.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCommision = this.onChangeCommision.bind(this);
        this.onChangeTaxPayment = this.onChangeTaxPayment.bind(this);
        this.onChangeCustomPayment = this.onChangeCustomPayment.bind(this);
        this.onChangeTransportPayment = this.onChangeTransportPayment.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
    

        this.state={
            orderId: '',
            lc:'',
            invoice:'',
            customPayment:0,
            transportPayment:0,
            commision:0,
            taxpayment:0,
            user:'',
            date:new Date(),


        
        
            orders:[],
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

     axios.get('http://localhost:5001/orders/')
     .then(Response=>{
         if(Response.data.length>0){
             this.setState({
                 orders:Response.data.map(order=>order.orderId),
                 orderId:Response.data[0].orderId 
             })
         }
     })
     

    }

    onChangeOrderId(e){
        this.setState({
            orderId: e.target.value
        });
    } 

    onChangeLc(e){
      this.setState({
          lc: e.target.value
      });
  } 

  onChangeInvoice(e){
    this.setState({
        invoice: e.target.value
    });
} 

onChangeCommision(e){
  this.setState({
      commision: e.target.value
  });
} 

onChangeTaxPayment(e){
  this.setState({
      taxpayment: e.target.value
  });
} 



    onChangeDate(date){
        this.setState({
            date:date
        });
    }
    onChangeCustomPayment(e){
        this.setState({
            customPayment: e.target.value
        });
    }
    onChangeTransportPayment(e){
        this.setState({
            transportPayment: e.target.value
        });
    }
  
    onChangeUser(e){
        this.setState({
            user: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault( );

        const cutomclearance={
           orderId: this.state.orderId,
           lc: this.state.lc,
           invoice: this.state.invoice,
           date:this.state.date,
           customPayment:this.state.customPayment,
           transportPayment:this.state.transportPayment, 
           commision:this.state.commision, 
           taxpayment:this.state.taxpayment, 
            
           user:this.state.user,
         
    }

    console.log(cutomclearance);

    axios.post('http://localhost:5001/customclearances/add',cutomclearance)
    .then(res=>console.log(res.data))
    .catch(error=>{
        console.log(error.response);
    })

    



    this.setState({
        orderId:'',
        lc:'',
        invoice:'',
        customPayment:0,
        transportPayment:0,
        commision:0,
        taxpayment:0,
        shipper:0,
        user:'',

    })
    swal("Add Custom Clearance?")
    .then((value) => {
      document.location.reload();
});


}





render() {
    return (
   <div className="container">
         <form onSubmit={this.onSubmit}>



<div className="form-row">
  <div className="row">

<div className="col-4 mb-3"> 
<label for="orderID">Order ID </label>
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

<div className="col-6 mb-3">
  <label>Date: </label>
  <div>
    <DatePicker
      selected={this.state.date}
      onChange={this.onChangeDate}
    />
  </div>
</div>
</div>
</div>


<div className="form-group "> 
<div className="row">
  <div className="col-4 mb-3">
  <label for="lc" className="">Letter of Credit(LC)</label>
 <div className="input-group">

  <input 
      type="text" 
      id="lc"
      className="form-control"
      value={this.state.lc}
      onChange={this.onChangeLc}
      />  
      </div>
  </div>
  <div className="col-4 mb-3">
  <label for="invoice" className="">Invoice</label>
 
  <input 
      type="text" 
      id="invoice"
      className="form-control"
      value={this.state.invoice}
      onChange={this.onChangeInvoice}
      />  
      
  </div>
  </div>
</div>


<div className="form-group "> 
<div className="row">
<div className="col-4 mb-3">
  <label for="custom" className="">Custom Clearnce Payment</label>
 <div className="input-group">
<div className="input-group-prepend">
  <div className="input-group-text">Rs.</div>

 </div>
  <input 
      type="text" 
      id="custom"
      className="form-control"
      value={this.state.customPayment}
      onChange={this.onChangeCustomPayment}
      />  
      </div>
  </div>

  <div className="col-4 mb-3">
  <label for="transportpay" className="">Trasnsportion cost</label>
 <div className="input-group">
<div className="input-group-prepend">
  <div className="input-group-text">Rs.</div>

 </div>
  <input 
      type="text" 
      id="transportpay"
      className="form-control"
      value={this.state.transportPayment}
      onChange={this.onChangeTransportPayment}
      />  
      </div>
  </div>
  </div>
</div>

<div className="form-group "> 
<div className="row">
<div className="col-4 mb-3">
  <label for="commision" className="">Commision</label>
 <div className="input-group">
<div className="input-group-prepend">
  <div className="input-group-text">Rs.</div>

 </div>
  <input 
      type="text" 
      id="commision"
      className="form-control"
      value={this.state.commision}
      onChange={this.onChangeCommision}
      />  
      </div>
  </div>
 
  <div className="col-4 mb-3">
  <label for="tax" className="">Tax Payment</label>
 <div className="input-group">
<div className="input-group-prepend">
  <div className="input-group-text">Rs.</div>

 </div>
  <input 
      type="text" 
      id="tax"
      className="form-control"
      value={this.state.taxpayment}
      onChange={this.onChangeTaxPayment}
      />  
      </div>
  </div>
  </div>
</div>



<div className="form-group col-4 mb-3"> 
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






        <br></br>



<div className="form-group mb-3">
  <input type="submit" value="Create Order" className="btn btn-primary" />
</div>
</form>







<div className="col-12 bg-light pt-5 pb-5 border">

      <CustomClearanceList/>
      
      </div>

   </div>
    )
  }
}
