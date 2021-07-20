import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

//shorcut rafce


const ReceivingSingle = props=> {

    const [orderId,setOrderId]=useState("");
    const [shippedDate,setShippedDate]=useState("");
    const [customAgent,setCustomagent]=useState("");
    const [agentEmail,setagentEmail]=useState("");
    const [agentMobile,setAgentmobile]=useState("");
    const [filename,setFilename]=useState("");
    const [hsCode,setHsCode]=useState("");


  //  const [filename,setFilename]=useState("");  
 
    
  
    useEffect(() => {
        axios
        .get(`http://localhost:5001/receivings/${props.match.params.id}`)
        .then(res=>[
        setOrderId(res.data.orderId),
        setCustomagent(res.data.customAgent),
        setShippedDate(res.data.shippedDate),
        setagentEmail(res.data.agentEmail),
        setFilename(res.data.deliveryOrder),
        setAgentmobile(res.data.agentMobile),
        setHsCode(res.data.hsCode)
  
//    setFilename(res.data.setFilename)

])
.catch(error =>console.log(error))
    }, [props]);


  


    return (

        <div>
        <div className="container p-5 m-5 bg-info text-white">

            {!orderId ? (<CircularProgress color="secondary"/>) : (
        <>
 
 <form  encType='multipart/form-data'>





<div className="form-row">
  <div className="row">

<div className="col-6 mb-3"> 
<label >Order ID </label>
  <input 
    disabled
      placeholder={orderId}
      type="text" 
      className="form-control"
     
      />  
</div>

<div className="col-6 mb-3">
  <label>Shipped Date: </label>
  <input 
    disabled
      placeholder={shippedDate}
      type="text" 
      className="form-control"
     
      />  
  <div>
 
  </div>
</div>
</div>
</div>



<div className="form-group col-6 mb-3"> 
  <label>Custom Agents </label>

  <input 
      type="text" 
      id="agentpay"
      className="form-control"
      disabled
      placeholder={customAgent}

      />  
      
  
</div>

<div className="form-group col-6 mb-3"> 
  <label>Agent Email </label>
  <div className="input-group">
  <input 
      type="text" 
      id="agentpay"
      className="form-control"
      disabled
      placeholder={agentEmail}

      />  

  </div>
</div>

<div className="form-group col-6 mb-3"> 
  <label>Agent mobile </label>
  <div className="input-group">
  <input 
      type="text" 
      id="agentpay"
      className="form-control"
      disabled
      placeholder={agentMobile}

      />  

  </div>
</div>
<div className="form-group">
  <div className="row">

 
</div>

</div>
<div className="row">
  
<div className="col-6 mb-3"> 
<label>Delivery Order</label>
<img
src={`/receivings/${filename}`}
alt="auctionsheet"
className="img-fluid"
></img>
</div>

<div className="col-6 mb-3"> 
<label>Bill of Lading </label>
<img
src="/orders/bl.png"
alt="loc"
className="img-fluid"
></img>
</div>


</div>


<div className="row col-6">
  <label>Invoice</label>
<img
src="/orders/invoice.png"
alt="loc"
className="img-fluid"
></img>
</div>
<br></br>


</form>
         
            <br></br>
            <Link to="/receivings" type="submit" className="btn btn-primary">Back to the receivings</Link>

        </>
            )}
        </div>
        </div>
    )
}

export default ReceivingSingle;
