const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');

const app = express();
require('dotenv').config();

//db
mongoose.connect(process.env.DATABASE, 
		{
			useNewUrlParser: true,
			useCreateIndex: true
		})
		.then(()=>console.log("Database connected"))

//import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');

//middleware
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use('/api', braintreeRoutes);
app.use('/api', orderRoutes);

const port = process.env.PORT || 4040;
app.listen(port,()=>{
	console.log(`Server started....at port ${port}`);
})