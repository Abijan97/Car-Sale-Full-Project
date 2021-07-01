import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor:'teal',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
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
      
  }));

  export default function Orderviews() {
      
    const classes = useStyles();

    const [orders,setorders]=useState([]);
  
  useEffect(()=>{
    axios
      .get('http://localhost:5001/orders/')
      .then(res => setorders(res.data))
      .catch(error=>console.log(error));
  })
  
  
  return (
      <React.Fragment>
          <CssBaseline/>
          <div className={classes.heroContent}>
    
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Agents
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              you can add, view, delete agents from here.
            </Typography>

        
        </div>



    <div className={classes.root}>
        {orders.map((order,key)=>(
              <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{order.orderId}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
        ))}
    
    
    </div>
    </React.Fragment>
  );



  }