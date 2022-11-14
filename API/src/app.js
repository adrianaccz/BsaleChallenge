import express from "express";
import morgan from "morgan";
const cors = require('cors')
//routes
import productRoutes from './routes/product.routes';
require('dotenv').config();

const app = express();

//settings
app.set("port", process.env.PORT || 3001);

//middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json())


//routes
app.use("/api/products", productRoutes);

export default app;