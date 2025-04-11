const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate password length
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  // ... (rest of the code remains the same)
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check for null or undefined email or password
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // ... (rest of the code remains the same)
};
// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error("❌ Error in /register:", err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// LOGIN
// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, username: user.username }); // ✅ include name
  } catch (err) {
    console.error("❌ Error in /login:", err.message);
    console.error("❌ Full stack:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
