import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

// Routes
import StudentRoutes from './routes/students';
import CustomerRoutes from "./routes/customers";
import ProductRoutes from "./routes/products";
import InvoiceRoutes from "./routes/invoices";
import UserRoutes from "./routes/users";
import MainRoutes from "./routes/main";

// Initializations
const app = express();

// settings
app.set('port', process.env.PORT || 8000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(methodOverride());

// Routes       
  
//mongodb        
mongoose.connect(`mongodb+srv://carlos:carlos1994@cluster0.u08yi.mongodb.net/school-backend?retryWrites=true&w=majority`,(err)=>{
if(err) throw err;       
console.log("MongoDB Connected Successfully");
}) 
 
//routes  
app.use("/api", MainRoutes); 
app.use('/api/customers', CustomerRoutes); 
app.use('/api/students', StudentRoutes); 
app.use('/api/products', ProductRoutes);  
app.use('/api/invoices', InvoiceRoutes);    
app.use('/api/users', UserRoutes);   
  
// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));  
});   