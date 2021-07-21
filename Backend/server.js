const express = require('express');
const cors= require('cors')
const mongoose= require('mongoose');


require('dotenv').config();



const app= express();
const port=process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

//connect mongodb atlas using .env file

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});

const connection =mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully!");
}) 

//creating routes

const usertypeRouter = require('./routes/usertypes');
const usersRouter = require('./routes/users');
const agentsRouter=require('./routes/agents');
const shipperRouter=require('./routes/shippers');
const customerRouter=require('./routes/customers');
const orderRouter=require('./routes/orders');
const CustomClearanceRouter = require('./routes/customclearance');
// const OrderReceiveRouter=require('./routes/orderreceives');
const VehiclesRouter=require('./routes/vehicles');
const StocksRouter=require('./routes/stocks');
const ReceivingsRouter=require('./routes/receivings');
const TaxesRouter=require('./routes/taxes');
const SalesRouter=require('./routes/sales');


//using routes

app.use('/users',usersRouter);
app.use('/usertypes',usertypeRouter);
app.use('/agents',agentsRouter);
app.use('/shippers',shipperRouter);
app.use('/customers',customerRouter);
app.use('/orders',orderRouter);
app.use('/customclearances',CustomClearanceRouter);
app.use('/stocks',StocksRouter);
app.use('/vehicles',VehiclesRouter);
app.use('/receivings',ReceivingsRouter);
app.use('/taxes',TaxesRouter);
app.use('/sales',SalesRouter);


 

app.listen(port,()=>{
    console.log(`Server is start at server ${port}`);
})

//ATLAS_URI=mongodb://localhost/CarSale


//mongodb+srv://admin:<password>@carsale.dod2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority