import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Helper to generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Tokens naturally expire after 30 days
    });
};

// @route POST /api/auth/register
// @desc Register a new agent
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists based on Email
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Agent with this email already exists in the system.' });
        }

        // Check if username is taken
        const usernameExists = await User.findOne({ username });
        if (usernameExists) {
            return res.status(400).json({ message: 'Username is already taken by another agent.' });
        }

        // Create new user (Password hashing executes automatically via Mongoose pre-save hook)
        const user = await User.create({
            username,
            email,
            password
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid payload data received.' });
        }
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal Server Error during registration.' });
    }
});

// @route POST /api/auth/login
// @desc Authenticate user & grab secure token
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        // Compare plain password against Hashed DB password
        if (user && (await user.comparePassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid access code or email.' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal Server Error during authentication.' });
    }
});

export default router;
