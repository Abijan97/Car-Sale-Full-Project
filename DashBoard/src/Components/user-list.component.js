import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const User =props=> (

    <tr>
        <td>{props.user.usertypeId}</td>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>
        <td>{props.user.mobile}</td>
        <td>
           <Link className="btn btn-warning" to={"/edit/"+props.user.id}>edit</Link> | <a className="btn btn-danger" href="#" onClick={()=>{
              swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  {props.deleteUser(props.user._id) };
                  swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                
                  });
    
                } else {
                  swal("Your imaginary file is safe!");
                }
              });
              
    
          
          
          }}> delete</a> 
            
        </td>
    </tr>


)



export default class UsersList extends Component {
        constructor(props) {
          super(props); 
      
          this.deleteUser = this.deleteUser.bind(this)
      
          this.state = {users: []};
        }
        
        componentDidMount() {
          axios.get('http://localhost:5001/users/')
            .then(response => {
              this.setState({ users: response.data })
            })
            .catch((error) => {
              console.log(error); 
            })
        }
        
        deleteUser(id) {
          axios.delete('http://localhost:5001/users/'+id)
            .then(response => { console.log(response.data)});
      
          this.setState({
            users: this.state.users.filter(el => el._id !== id)
          })
        }
      usersList(){
          return this.state.users.map(currentuser=>{
              return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>

          })
      } 

    render(){
        return (
          <div className="container pt-5 pb-5 ">
          <div className="">
            <h3>Users</h3>
            </div>
            <div>
            <table className="table  table-boarded table-striped table-dark">
              <thead className="thead-light">
                <tr className="">
                  <th>User type</th>
                  <th>User name</th>
          
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Actions</th>

                </tr>
              </thead>
              <tbody>
                { this.usersList() } 
              </tbody>
            </table>
          </div>
          </div>
        
        )
    }
}


