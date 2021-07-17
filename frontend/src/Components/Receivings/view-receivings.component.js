import React,{useEffect,useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Swal from 'sweetalert2';
import axios from 'axios';
import CreateReceivings from './create-receivings.component';
import { Link } from 'react-router-dom';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2'

//materila ui things
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },},
  
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.success.light,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));





export default function ReceivingCard() {
  const classes = useStyles();

//delete order
const [receiving,setReceiving]=useState([]);

const deleteReceiving = id =>{
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      axios.delete(`http://localhost:5001/receivings/${id}`)
  .then(res => console.log((res.data)) )
  setReceiving(receiving.filter(elem => elem._id !== id))

  

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  
}

const [receivings,setReceivings]=useState([]);
  
useEffect(()=>{
  axios
    .get('http://localhost:5001/receivings/')
    .then(res => setReceivings(res.data))
    .catch(error=>console.log(error));
},[])


    
  return (
    <React.Fragment>
        <CssBaseline/>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Order Receivings
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              you can add, view, delete Order Receivings from here.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>


                </Grid>
                <Grid item>
            

                <button type="button" className="btn btn-primary float-right" data-bs-toggle="modal" data-bs-target="#exampleModalone">
  Receive a Vehicle Order
</button>


<div className="modal fade bd-example-modal-lg" id="exampleModalone" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
     
      <div className="modal-body">
        <div className="container border border-primary rounded pb-5 pt-5 mt-2 mb-2">
          <div>
          <h4 className="bg-primary text-white p-2 mb-3">Receive a Vehicle Order</h4>
          </div>
          <div className="col-12">
        <CreateReceivings/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

                </Grid>
              </Grid>
            </div>
          </Container>
        </div>



<div className="row mt-5">


        <div className={classes.root}>
        {receivings.map((receiving,key)=>(
              <Accordion key={key}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Order ID : {receiving.orderId}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <div className="container">

                
  
      <form  encType='multipart/form-data'>

<Link className="btn btn-info" to={`/receiving/${receiving._id}`}>Add Taxes</Link>
<br></br>


<div className="form-row">
  <div className="row">

<div className="col-6 mb-3"> 
<label >Order ID </label>
  <input 
    disabled
      placeholder={receiving.orderId}
      type="text" 
      className="form-control"
     
      />  
</div>

<div className="col-6 mb-3">
  <label>Shipped Date: </label>
  <input 
    disabled
      placeholder={receiving.shippedDate}
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
      placeholder={receiving.customAgent}

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
      placeholder={receiving.agentEmail}

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
      placeholder={receiving.agentMobile}

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
src={`/receivings/${receiving.deliveryOrder}`}
alt="auctionsheet"
className="img-fluid"
></img>
</div>

<div className="col-6 mb-3"> 
<label>Bill of Lading </label>
<img
src="/orders/loc.png"
alt="loc"
className="img-fluid"
></img>
</div>


</div>


<div className="row col-6">
<img
src="/orders/invoice.png"
alt="loc"
className="img-fluid"
></img>
</div>
<br></br>

<div className="form-group mb-3">
  <input onClick={()=>deleteReceiving(receiving._id)} value="Delete Order Receiving" className="btn btn-warning" />
</div>
</form>





                  </div>

              </AccordionDetails>
            </Accordion>
        ))}
    
    
    </div>
    </div>

    

    </React.Fragment>
  );
}