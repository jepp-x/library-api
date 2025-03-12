import express from 'express';
import libraryRouter from './routes/library_routes.js';
import mongoose from 'mongoose';
import cors from "cors"


// make data base connection
await mongoose.connect(process.env.MONGO_URI);

// create the app 
const app = express();

// use global midddleware
app.use(express.json());

app.use(cors());

// use the routers
app.use('/api/v1', libraryRouter);

// starting server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})



