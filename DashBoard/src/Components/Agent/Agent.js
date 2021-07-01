import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
//shorcut rafce


const Agent = props=> {

    const [agentId,setAgentId]=useState("");
    const [agentName,setAgentName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [company,setCompany]=useState("");
    const [filename,setFilename]=useState("");  

    
  
    useEffect(() => {
        axios
        .get(`http://localhost:5001/agents/${props.match.params.id}`)
        .then(res=>[
        setAgentId(res.data.agentId),
    setAgentName(res.data.agentName),
    setEmail(res.data.email),
    setMobile(res.data.email),
    setCompany(res.data.company),
    setFilename(res.data.filename)
])
.catch(error =>console.log(error))
    }, [props]);


  


    return (
        <div>
            <h1>Hello this is it</h1>
            <h2>{agentName}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Agent;
