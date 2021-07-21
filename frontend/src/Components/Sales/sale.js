import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

//shorcut rafce


const MTA = props=> {

    
   const [filename,setFilename]=useState("");  
   const [saleNo,setSaleno]=useState("");
   const [date,setDate]=useState("");
 
    
      useEffect(() => {
        axios
        .get(`http://localhost:5001/sales/${props.match.params.id}`)
        .then(res=>[
        setFilename(res.data.MTA),
        setSaleno(res.data.saleNo),
        setDate(res.data.date)

])
.catch(error =>console.log(error))
    }, [props]);



    return (

        <div>
        <div className="card w-75">

            {!saleNo ? (<CircularProgress color="secondary"/>) : (
        <>
 
        
                <h4>Sale Number : {saleNo}</h4>
                <h5>Date : {date}</h5>
    
                <img src={`/sales/${filename}`} alt="pic"></img>
         
            <br></br>
            <Link to="/sales" type="submit" className="btn btn-primary">Back to the Sales</Link>

        </>
            )}
        </div>
        </div>
    )
}

export default MTA;
