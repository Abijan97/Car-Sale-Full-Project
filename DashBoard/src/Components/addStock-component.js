// import React,{Component} from 'react';
// import axios from 'axios';


// import swal from "sweetalert";



// export default class CreateStock extends Component{

//     constructor(props){
//         super(props);

//         this.onChangeVehicleId = this.onChangeVehicleId.bind(this);
        
//         this.onChangeModelName = this.onChangeModelName.bind(this);
//         this.onChangeMarketPrice = this.onChangeMarketPrice.bind(this);
//         this.onChangeOrderId = this.onChangeOrderId.bind(this);
//         this.onChangeColor = this.onChangeColor.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

        
    

//         this.state={
//             vehicleId: '',
//             modelName: '',
//             marketPrice: 0,
//             orderId:'',
//             color:'',


        
        
//             orders:[],
//             vehicles:[] 
//         }
//     }

//     componentDidMount(){
//      axios.get('http://localhost:5001/vehicles/')
//      .then(Response=>{
//          if(Response.data.length>0){
//              this.setState({
//                  vehicles:Response.data.map(vehicle=>vehicle.modelName),
//                  modelName:Response.data[0].modelName 
//              })
//          }
//      })

//      axios.get('http://localhost:5001/orders/')
//      .then(Response=>{
//          if(Response.data.length>0){
//              this.setState({
//                  orders:Response.data.map(order=>order.orderId),
//                  orderId:Response.data[0].orderId 
//              })
//          }
//      })
     

//     }

//     onChangeVehicleId(e){
//         this.setState({
//             vehicleId: e.target.value
//         });
//     } 
   
//     onChangeModelName(e){
//         this.setState({
//             modelName: e.target.value
//         });
//     }
//     onChangeMarketPrice(e){
//         this.setState({
//             marketPrice: e.target.value
//         });
//     }
  
//     onChangeOrderId(e){
//         this.setState({
//             orderId: e.target.value
//         });
//     }

//     onSubmit(e){
//         e.preventDefault( );

//         const stock={
//            vehicleId: this.state.vehicleId,
//            modelName:this.state.modelName,
//            marketPrice:this.state.marketPrice,
//            orderId:this.state.orderId,  
//            color:this.state.color
         
//     }

//     console.log(stock);

//     axios.post('http://localhost:5001/stocks/add',stock)
//     .then(res=>console.log(res.data))
//     .catch(error=>{
//         console.log(error.response);
//     })

    



//     this.setState({
//         vehicleId:'',
//         modelName:'',
//         marketPrice:0,
//         orderId:'',
//         color:''

//     })
//     swal("Add new customer?")
//     .then((value) => {
//       document.location.reload();
// });


// }





// render() {
//     return (
//     <div className="container">
//       <div className="row">
//         <div className="col-4 bg-light border p-5">
//       <h3>Add Vehicles to stock</h3>
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group"> 
//         <label>Vehicle ID </label>
//         <input 
//               type="text" 
//               className="form-control"
//               value={this.state.vehicleId}
//               onChange={this.onChangeVehicleId}
//               />  
//         </div>

//         <div className="form-group">
//           <label>Model Name </label>
//           <select ref="userInput"
//               required
//               className="form-control"
//               value={this.state.modelName}
//               onChange={this.onChangeModelName}>
//               {
//                 this.state.stocks.map(function(stock) {
//                   return <option 
//                     key={stock}
//                     value={stock}>{stock}
//                     </option>;
//                 })
//               }
//           </select>
//         </div>

//         <div className="form-group"> 
//         <label>Order ID</label>
//         <select ref="userInput"
//               required
//               className="form-control"
//               value={this.state.orderId}
//               onChange={this.onChangeOrderId}>
//               {
//                 this.state.orders.map(function(order) {
//                   return <option 
//                     key={order}
//                     value={order}>{order}
//                     </option>;
//                 })
//               }
//           </select>
//         </div>
      

//         <div className="form-group"> 
//           <label>Color </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.color}
//               onChange={this.onChangeColor}
//               />  

//         </div>




       


//         <div className="form-group">
//           <input type="submit" value="ADD" className="btn btn-primary" />
//         </div>
        
//       </form>
//       </div>
      
//       <div className="col-7 bg-light">
//               {/* <CustomClearanceList/> */}
//       </div>
//     </div>
//     </div>
//     )
//   }
// }
