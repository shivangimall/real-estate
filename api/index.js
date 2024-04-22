import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingrouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from 'path';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDb connectedd")
}).catch((err) => {
    console.log(err);
});
const __dirname = path.resolve();
app.listen(3000, () => console.log("Server Started!!"));
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingrouter);


app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})


app.use((error,req,res,next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
});
