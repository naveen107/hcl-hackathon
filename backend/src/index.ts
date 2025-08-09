import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './routes';
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
  
// Routes
app.use('/api', Routes);
app.listen(PORT,()=>{
    console.log(`Ecommerce app running this port ${PORT}` )
})