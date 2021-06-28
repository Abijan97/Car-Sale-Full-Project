
import me from './pic/mail image.jpg';




 const AgentView = ({posts}) => {
    return (
        
        <div className="d-flex">
           
            {posts.map((agent,key)=>(    
                
                <div class="card offset-1" style={{width: "18rem"}}>
                <img class="card-img-top" src={me} alt="Card image cap" alt="pic"></img>
                <div class="card-body">
                  <h5 class="card-title">{agent.agentName}</h5>
                  <p class="card-text">{agent.email}</p>
                  <a href="#" class="btn btn-primary">Update</a>
                  <a href="#" class="btn btn-secondary">Delete</a>
                </div>
              </div>
               

              )  )}
              </div>

    );
};


export default AgentView;