import express from 'express';
import { taskRoutes } from './taskRoutes/taskRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import { rateLimiter } from './middleware/rateLimiter.js';
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use('/api/tasks', taskRoutes);


connectDB().then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server running on port: ${PORT}`);
    })
});

