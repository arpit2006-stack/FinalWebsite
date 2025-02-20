import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import bodyParser from "body-parser";




const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes); 

app.use((err, req, res, next) => {
    console.log(err.stack);
  
    const StatusCode = err.statusCode || 500;
    res.status(StatusCode).json({ message: err.message });
  });
  

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`,);
  connectDB();
});