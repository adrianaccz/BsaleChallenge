import express from "express";
import morgan from "morgan";
//routes
import productRoutes from './routes/product.routes';
require('dotenv').config();

const app = express();

//settings
app.set("port", process.env.PORT || 3001);

//middlewares
app.use(morgan("dev"));
app.use(express.json())

//routes
app.use("/api/products", productRoutes);

export default app;