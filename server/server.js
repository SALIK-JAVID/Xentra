import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: `Backend is running smoothly on port ${PORT}` });
});

// Database Connection & Server Start
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB successfully');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error.message);
        // Start express listening even if DB fails, allowing the console messages.
        app.listen(PORT, () => {
             console.log(`⚠️ Server running without DB connection on http://localhost:${PORT}. Please check your MONGO_URI in the .env file.`);
        });
    });
