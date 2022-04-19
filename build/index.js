"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
// Routes
const students_1 = __importDefault(require("./routes/students"));
const customers_1 = __importDefault(require("./routes/customers"));
const products_1 = __importDefault(require("./routes/products"));
const invoices_1 = __importDefault(require("./routes/invoices"));
const users_1 = __importDefault(require("./routes/users"));
const main_1 = __importDefault(require("./routes/main"));
// Initializations
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
// settings
app.set('port', process.env.PORT || 8000);
app.use(cors());
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//app.use(methodOverride());
// Routes       
//mongodb        
mongoose_1.default.connect(`mongodb+srv://carlos:carlos1994@cluster0.u08yi.mongodb.net/school-backend?retryWrites=true&w=majority`, (err) => {
    if (err)
        throw err;
    console.log("MongoDB Connected Successfully");
});
//routes  
app.use("/api", main_1.default);
app.use('/api/customers', customers_1.default);
app.use('/api/students', students_1.default);
app.use('/api/products', products_1.default);
app.use('/api/invoices', invoices_1.default);
app.use('/api/users', users_1.default);
// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});
