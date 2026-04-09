import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('Backend Server is running!');
});

// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: `Backend is running smoothly on port ${PORT}` });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
