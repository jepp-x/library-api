import express from 'express';
import libraryRouter from './routes/library_routes.js';
import mongoose from 'mongoose';


// make data base connection
await mongoose.connect(process.env.MONGO_URI);

// create the app 
const app = express();

// use global midddleware
app.use(express.json());

// use the routers
app.use(libraryRouter);

// starting server
app.listen(5000,() =>{
    console.log('server is listening on port 5000');
})



