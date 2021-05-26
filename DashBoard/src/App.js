
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// importing components 
import Navbar from "./Components/navbar.component";
import UserList from "./Components/user-list.component";
import EditUser from "./Components/edit-user.component";
import CreateUser from "./Components/create-user.component";
import CreateUserType from "./Components/create-usertype.component";
import UserTypesList from "./Components/usertype-list.component";

function App() {
  return (
    <Router>
      <div className="container">  
   <Navbar/>
    <br/>
  
    <Route path="/" exact component={UserList} />  
    <Route path="/edit/:id" exact component={EditUser} />
    <Route path="/create" exact component={CreateUser} />
    <Route path="/usertypes" exact component={CreateUserType} />
    <Route path="/createusertype" exact component={UserTypesList}/>

    </div>
    </Router>
  );
}

export default App;
