import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import SimpleReactValidator from 'simple-react-validator';





   

const CreateOrders=()=> {
        
    const [orderId,setOrderId]=useState("");
    const [date,setDate]=useState(new Date());
    const [payment,setPayment]=useState("");
    const [agent,setAgent]=useState("");
    const [shipper,setShipper]=useState("");
    const [user,setUser]=useState("");
    const [customer,setCustomer]=useState("");
    const [insuranceCost,setInsurance]=useState(0);
    const [shippingCost,setShippingCost]=useState(0);
    const [agentPayment,setAgentpayment]=useState(0);
    const [auctionSheetid,setAuctionsheetid]=useState("");
    const [filename,setFilename]=useState("");
    const [invoiceNumber,setInvoiceNumber]=useState("");
    const [bank,setBank]=useState("");
    const [bankEmail,setBankEmail]=useState("");
    const [locNum,setLocnum]=useState("");
    let [cif,setCif]=useState(0);
    const [invoice,setInvoice]=useState("")
    const [loc,setLoc]=useState("");
  
   const setTotall=()=>{
      return Number(insuranceCost)+Number(agentPayment)+Number(shippingCost)+Number(payment);
    }

    cif=setTotall();

    const onChangeFile =e => {
        setFilename(e.target.files[0]);
  
    }
  
  const onChangeF=e=>{
    setInvoice(e.target.files[0]);
  }

  
  const onChangeFi=e=>{
    setLoc(e.target.files[0])
  }

    const changeonClick = e => {
        e.preventDefault();

        const formData=new FormData();

        formData.append("orderId",orderId);
        formData.append("date",date);
        formData.append("agent",agent);
        formData.append("payment",payment);
        formData.append("shipper",shipper);
        formData.append("user",user);
        formData.append("customer",customer);
        formData.append("insuranceCost",insuranceCost);
        formData.append("shippingCost",shippingCost);
        formData.append("agentPayment",agentPayment);
        formData.append("auctionSheetid",auctionSheetid);
        formData.append("auctionSheet",filename);
        formData.append("invoiceNumber",invoiceNumber);
        formData.append("bank",bank);
        formData.append("bankEmail",bankEmail);
        formData.append("locNum",locNum);
        formData.append("cif",cif);

        
        
        axios
        .post('http://localhost:5001/orders/add',formData)
        .then(res=>console.log(res.data))
        .catch((err)=>{
            console.log(err); 
        
        
        });

      
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Order Saved',
          showConfirmButton: false,
          timer: 1500
        })
        



    
    };

 
    const[shippers,setShippers]=useState([]);
    useEffect(() => {
      axios
      .get('http://localhost:5001/shippers/')
      .then(res => setShippers(res.data))
      .catch(error=>console.log(error));
    


    },[]);


    const[users,setUsers]=useState([]);
    useEffect(() => {
      axios
      .get('http://localhost:5001/users/')
      .then(res => setUsers(res.data))
      .catch(error=>console.log(error));
    
 


    },[]);

    const[customers,setCustomers]=useState([]);
    useEffect(() => {
      axios
      .get('http://localhost:5001/customers/')
      .then(res => setCustomers(res.data))
      .catch(error=>console.log(error));
    
 


    },[]);
    

    const[agents,setAgents]=useState([]);
    useEffect(() => {
      axios
      .get('http://localhost:5001/agents/')
      .then(res => setAgents(res.data))
      .catch(error=>console.log(error));
    
 


    },[]);

    //validator
    const simpleValidator = useRef(new SimpleReactValidator())

 

    return (
    
      
      
  
      <form onSubmit={changeonClick} encType='multipart/form-data'>



        <div className="form-row">
          <div className="row">

        <div className="col-6 mb-3"> 
        <label >Order ID </label>
          <input 
  
              type="text" 
              className="form-control"
              value={orderId}
              onChange={(e)=>setOrderId(e.target.value)}
              />  
        </div>

        <div className="col-6 mb-3">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={(date)=>setDate(date)}
            />
          </div>
        </div>
        </div>
        </div>
      
<div className="bg-secondary border rounded mt-2 mb-2 p-2 text-white">
  <div className="form-group "> 
        <div className="row">
          <div className="col-6 mb-3">
          <label htmlFor="pay" className="">Payment</label>
         <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              name="payment"
              className="form-control"
              value={payment}
              onChange={(e)=>setPayment(e.target.value)}
              onBlur={()=>simpleValidator.current.showMessageFor('payment')}

              />

           {simpleValidator.current.message('payment',payment, 'required|currency',{className:'text-danger'})}

              
              </div>
          </div>
          <div className="col-6 mb-3">
          <label htmlFor="insurancepay" className="">Insurance Payment</label>
         <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              id="insurancepay"
              className="form-control"
              value={insuranceCost}
              name="insuranceCost"
              onChange={(e)=>setInsurance(e.target.value)}
              onBlur={()=>simpleValidator.current.showMessageFor('insuranceCost')}

              />  
      {simpleValidator.current.message('insuranceCost',insuranceCost, 'required|currency',{className:'text-danger'})}

              </div>
          </div>
          </div>
        </div>


        <div className="form-group "> 
        <div className="row">
          <div className="col-6 mb-3">
          <label>Agent </label>

          <select 
              required
              className="form-control"
              value={agent}
              onChange={(e)=>setAgent(e.target.value)}>
          
          {  agents.map((agent,key)=>(
                <option key={key}>{agent.agentName}</option>

            ))  
      
          }   
              
          </select>
        
      
          </div>


          <div className="col-6 mb-3">
          <label htmlFor="agentpay" className="">Agent Payment</label>
         <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              id="agentpay"
              className="form-control"
              name="agentPayment"
              value={agentPayment}
              onChange={(e)=>setAgentpayment(e.target.value)}
              onBlur={()=>simpleValidator.current.showMessageFor('agentPayment')}

              />  
        {simpleValidator.current.message('agentPayment',agentPayment, 'required|currency',{className:'text-danger'})}

              </div>
          </div>
          </div>
        </div>

        <div className="form-group "> 
        <div className="row">
          <div className="col-6 mb-3">
          <label>Shipper </label>

<select 
    required
    className="form-control"
    value={shipper}
    onChange={(e)=>setShipper(e.target.value)}>

{  shippers.map((shipper,key)=>(
      <option key={key}>{shipper.shipperName}</option>

  ))  

}   
    
</select>

          </div>
          <div className="col-6 mb-3">
          <label htmlFor="shipperpay" className="">Shipping Payment</label>
         <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              className="form-control"
              name="shippingCost"
              value={shippingCost}
              onChange={(e)=>setShippingCost(e.target.value)}
              onBlur={()=>simpleValidator.current.showMessageFor('shippingCost')}


              
              />  
         {simpleValidator.current.message('shippingCost',shippingCost, 'required|currency',{className:'text-danger'})}

              </div>
          </div>
          </div>
        </div>
        
      <div className="form-group">
        <label className="h6">CIF Value</label>
    <input 
    className="form-control" 
    disabled 
    value={cif}
    onChange={(e)=>setCif(e.target.value)}

    placeholder={setTotall()}></input>
      </div>
      </div>

        <div className="form-group col-6 mb-3"> 
          <label>Manager </label>

          <select 
            
              className="form-control"
              value={user}
              onChange={(e)=>setUser(e.target.value)}>
          
          {  users.map((user,key)=>(
                <option key={key}>{user.username}</option>

            ))  
      
          }   
              
          </select>
        </div>

        <div className="form-group col-6 mb-3"> 
          <label>Customer </label>
          <div className="input-group">
            {/* adding a checkbox */}

          
            <select 
              required
              className="form-control"
              value={customer}
              onChange={(e)=>setCustomer(e.target.value)}>
          
          {  customers.map((customer,key)=>(
                <option key={key}>{customer.username}</option>

            ))  
      
          }   
              
          </select>
          </div>
        </div>
        <div className="form-group">
          <div className="row">


        <div className="col-6 mb-3"> 
        <label htmlFor="">auctionSheet id</label>
          <input 
      
              type="text" 
              className="form-control"
              value={auctionSheetid}
              onChange={(e)=>setAuctionsheetid(e.target.value)}
              />  
        </div>

        <div className="col-6 mb-3"> 
        <label>Auction Sheet </label>
          <input 
              type="file" 
              className="form-control"
              name="auctionSheet"
              onChange={onChangeFile}
              />  
        </div>

        </div>
        </div>
          <div className="form-group">
            <div className="row">
        <div className="col-6 mb-3"> 
        <label htmlFor="invoice">Invoice Number</label>
          <input 
            
              type="text" 
              className="form-control"
              value={invoiceNumber}
              onChange={(e)=>setInvoiceNumber(e.target.value)}
              />  
        </div>
        <div className="col-6 mb-3"> 
        <label>Invoice </label>
          <input 
              type="file" 
              className="form-control"
              name="invoice"
              onChange={onChangeF}
              />  
        </div>
        
     
        </div>
        </div>

        <div className="col-6 mb-3"> 
        <label >Bank</label>
          <input 
              id=""
              type="text" 
              className="form-control"
              value={bank}
              onChange={(e)=>setBank(e.target.value)}
              />  
        </div>
        <div className="col-6 mb-3"> 
        <label >Bank Email</label>
          <input 
              id=""
              type="text" 
              className="form-control"
              value={bankEmail}
              onChange={(e)=>setBankEmail(e.target.value)}
              />  
        </div>

        <div className="form-group">
            <div className="row">
        <div className="col-6 mb-3"> 
        <label htmlFor="">Loc Number</label>
          <input 
              id=""
              type="text" 
              className="form-control"
              value={locNum}
              onChange={(e)=>setLocnum(e.target.value)}
              />  
        </div>

        <div className="col-6 mb-3"> 
        <label>Loc Image </label>
          <input 
              type="file" 
              className="form-control"
              name="loc"
              onChange={onChangeFi}
              />  
        </div>

        </div>
        </div>
        
        



                <br></br>
       


        <div className="form-group mb-3">
          <input type="submit" value="Create Order" className="btn btn-primary" />
        </div>
      </form>
    

      
      

      
    
    
    
    
    )  
  
}
export default CreateOrders;