import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import Swal from 'sweetalert2';




   

const CreateReceivings=()=> {
        
    const [orderId,setOrderId]=useState("");
    const [shippedDate,setShippedDate]=useState(new Date());
    const [customAgent,setCustomagent]=useState("");
    const [agentEmail,setagentEmail]=useState("");
    const [agentMobile,setAgentmobile]=useState("");
    const [bl,setBi]=useState("");
    const [hsCode,setHscode]=useState("");
    const [filename,setFilename]=useState("");
    const [capacity,setCapacity]=useState("");
  
    // const[shippingCost,setShippingCost]=useState("");

    const[orders,setOrders]=useState([]);
    useEffect(() => {
      axios
      .get('http://localhost:5001/orders/')
      .then(res => setOrders(res.data))
      .catch(error=>console.log(error));
    
 


     },[]);

    

    // if(capacity==="highend"){
    //     customDuty={orders.shippingCost}
    // }
    // else{
    //     customDuty=orders.shippingCost;
    // }

    // console.log(customDuty);


    const onChangeFile =e => {
        setFilename(e.target.files[0]);
  
    }
  
  

  
    const changeonClick = e => {
        e.preventDefault();

        const formData=new FormData();

        formData.append("orderId",orderId);
        formData.append("shippedDate",shippedDate);
        formData.append("customAgent",customAgent);
        formData.append("agentEmail",agentEmail);
        formData.append("agentMobile",agentMobile);
        formData.append("bl",bl);
        formData.append("hsCode",hsCode);
        formData.append("deliveryOrder",filename);
        
     
      

        
        
        axios
        .post('http://localhost:5001/receivings/add',formData)
        .then(res=>console.log(res.data))
        .catch((err)=>{
            console.log(err); 
        
        
        });

      
        // Swal.fire({
        //   position: 'top-end',
        //   icon: 'success',
        //   title: 'Order Saved',
        //   showConfirmButton: false,
        //   timer: 1500
        // })
        



    
    };

    

 


    


 

    return (
    
      
      
  
      <form onSubmit={changeonClick} encType='multipart/form-data'>




        <div className="form-row">
          <div className="row">

        <div className="col-6 mb-3"> 
        <label >Order ID </label>
      
<select 
    required
    className="form-control"
    value={orderId}
    onChange={(e)=>setOrderId(e.target.value)}>

{  orders.map((order,key)=>(
      <option key={key}>{order.orderId}</option>

  ))  

}   
    
</select>
        </div>

        <div className="col-6 mb-3">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={shippedDate}
              onChange={(date)=>setShippedDate(date)}
            />
          </div>
        </div>
        </div>
        </div>
      

      
        <div className="form-group bg-secondary p-2 rounded text-white">
          <h5>Custom Agent</h5>
            <div className="row">
        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">Custom Agent</label>
          <input 
            
              type="text" 
              className="form-control"
              value={customAgent}
              onChange={(e)=>setCustomagent(e.target.value)}
              />  
        </div>
        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">Agent Email</label>
          <input 
            
              type="text" 
              className="form-control"
              value={agentEmail}
              onChange={(e)=>setagentEmail(e.target.value)}
              />  
        </div>

        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">Capacity</label>

          <select
            
              type="text" 
              className="form-control"
              value={capacity}
              onChange={(e)=>setCapacity(e.target.value)}
              >
                  <option value="highend">highend</option>
                  <option value="lowend">Lowend</option>
              </select>
        </div>


        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">Agent Mobile</label>
          <input 
            
              type="text" 
              className="form-control"
              value={agentMobile}
              onChange={(e)=>setAgentmobile(e.target.value)}
              />  
        </div>
        
     
        </div>
        </div>
        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">Bill of Lading</label>
          <input 
            
              type="text" 
              className="form-control"
              value={bl}
              onChange={(e)=>setBi(e.target.value)}
              />  
        </div>
        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">HS Code</label>
          <input 
            
              type="text" 
              className="form-control"
              value={hsCode}
              onChange={(e)=>setHscode(e.target.value)}
              />  
        </div>
        
      




     
        
          <div className="col-6 mb-3"> 
        <label>Delivery Order </label>
          <input 
              type="file" 
              className="form-control"
              name="deliveryOrder"
              onChange={onChangeFile}
              />  
        </div>
 



                <br></br>
       


        <div className="form-group mb-3">
          <input type="submit" value="Create Order" className="btn btn-primary" />
        </div>
      </form>
    

      
      

      
    
    
    
    
    )  
  
}
export default CreateReceivings;