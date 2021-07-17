import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import Swal from 'sweetalert2';




   

const CreateTaxes=()=> {
        
    const [orderId,setOrderId]=useState("");
    const [receivedDate,setReceiveddate]=useState(new Date());
    const [cessTax,setCesstax]=useState("");
    const [vat,setVat]=useState("");
    const [customDuty,setCustomDuty]=useState("");
    const [transportPayment,setTransportpayment]=useState("");
    const [repairPayment,setRepairpayment]=useState("");
    const [serviceCenter,setServiceCenter]=useState("");
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

    

    


    const onChangeFile =e => {
        setFilename(e.target.files[0]);
  
    }
  
  

  
    const changeonClick = e => {
        e.preventDefault();

        const formData=new FormData();

        formData.append("orderId",orderId);
        formData.append("cessTax",cessTax);
        formData.append("receivedDate",receivedDate);
        formData.append("vat",vat);
        formData.append("customDuty",customDuty);
        formData.append("transportPayment",transportPayment);
        formData.append("repairPayment",repairPayment);
        formData.append("invoice",filename);
     
      

        
        
        axios
        .post('http://localhost:5001/taxes/add',formData)
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
          <label>Received Date </label>
          <div>
            <DatePicker
              selected={receivedDate}
              onChange={(date)=>setReceiveddate(date)}
            />
          </div>
        </div>
        </div>
        </div>
      

      

  <div className="form-group bg-secondary p-2 m-2 text-white"> 
        <div className="row">
            <h5>Taxes</h5>
          <div className="col-6 mb-3">
          <label htmlFor="pay" className="">cessTax</label>
         <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              id="pay"
              className="form-control"
              value={cessTax}
              onChange={(e)=>setCesstax(e.target.value)}
              />  
              </div>
          </div>
          <div className="col-6 mb-3">
          <label htmlFor="insurancepay" className="">Custom Duty</label>
         <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              id="insurancepay"
              className="form-control"
              value={customDuty}
              onChange={(e)=>setCustomDuty(e.target.value)}
              />  
              </div>
          </div>

          <div className="col-6 mb-3">
          <label htmlFor="insurancepay" className="">Vat</label>
         <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              id="insurancepay"
              className="form-control"
              value={vat}
              onChange={(e)=>setVat(e.target.value)}
              />  
              </div>
          </div>
          </div>
          
        </div>

        <div className="form-group bg-secondary p-2 m-2 text-white">
     <h5 className="text-white">Repairs</h5>
        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">Service Center</label>
          <input 
            
              type="text" 
              className="form-control"
              value={serviceCenter}
              onChange={(e)=>setServiceCenter(e.target.value)}
              />  
        </div>
        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">Repair Payment</label>
        <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              id="insurancepay"
              className="form-control"
              value={repairPayment}
              onChange={(e)=>setRepairpayment(e.target.value)}
              />  
              </div> 
        </div>
        <div className="col-4 mb-3"> 
        <label htmlFor="invoice">Transport Payment</label>
        <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              id="insurancepay"
              className="form-control"
              value={transportPayment}
              onChange={(e)=>setTransportpayment(e.target.value)}
              />  
              </div> 
        </div>
        
        </div>


     
        
          <div className="col-6 mb-3"> 
        <label>Invoice </label>
          <input 
              type="file" 
              className="form-control"
              name="invoice"
              onChange={onChangeFile}
              />  
        </div>
 



                <br></br>
       


        <div className="form-group mb-3">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    

      
      

      
    
    
    
    
    )  
  
}
export default CreateTaxes;