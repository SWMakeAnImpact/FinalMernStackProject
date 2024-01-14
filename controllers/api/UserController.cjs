const User = require('../models/User.cjs');
const bcrypt = require('bcryptjs');
// Add more imports as needed (e.g., JWT for token handling)

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate and return JWT token (implementation depends on your JWT setup)

        res.json({ message: "Logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional user-related methods like profile update, password change, etc.
