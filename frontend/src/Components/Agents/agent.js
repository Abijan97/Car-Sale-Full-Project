import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Paper, Typography, Divider } from '@material-ui/core/';
import useStyles from './styles';

//shorcut rafce


const AgentSingle = props=> {
    const classes = useStyles();

    const [agentId,setAgentId]=useState("");
    const [agentName,setAgentName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [company,setCompany]=useState("");
    const [filename,setFilename]=useState("");
  //  const [filename,setFilename]=useState("");  
 
      
  
    useEffect(() => {
        axios
        .get(`http://localhost:5001/agents/${props.match.params.id}`)
        .then(res=>[
        setAgentId(res.data.agentId),
    setAgentName(res.data.agentName),
    setEmail(res.data.email),
    setMobile(res.data.mobile),
    setCompany(res.data.company),
    setFilename(res.data.agentImage)
//    setFilename(res.data.setFilename)

])
.catch(error =>console.log(error))
    }, [props]);


  


    return (

        <div>
         <div className="card w-75">

            {!agentName ? (<CircularProgress color="secondary"/>) : (
        <>
 
        
 <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{agentId}</Typography>
          <Typography variant="h5" >{agentName}</Typography>
          
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2"></Typography>
         
          <Typography variant="h6">{email}</Typography>
          
          <Typography variant="body1">{mobile}</Typography>

                    
          <Typography variant="body1">{company}</Typography>

       
        </div>
     
      </div>

        <div className={classes.section}>
         
          <div className={classes.recommendedPosts}>
          

                <img alt="file" src={`/agents/${filename}`} width="200px" />
              </div>
    
          </div>
    
 
    </Paper>
            <Link to="/agents" type="submit" className="btn btn-primary">Back to the Agents</Link>
           

        </>
            )}
        </div>
        </div>
    )
}

export default AgentSingle;
