import express from 'express';
import { connectToDatabase } from '../lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router(); // Corrected to express.Router()

const JWT_SECRET = "your_jwt_secret_key_here"; // Replace with a secure secret key

// User Registration Route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Connect to the database
        const db = await connectToDatabase();

        // Check if the user already exists
        const [rows] = await db.query('SELECT * FROM user WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        await db.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        // Generate JWT token
        const token = jwt.sign({ username, email }, JWT_SECRET, { expiresIn: '1h' });

        // Respond with success and token
        res.status(201).json({ message: "User registered successfully", token });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

export default router;
