const User = require('../../models/User.cjs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Create JWT payload
        const payload = {
            user: {
                id: newUser._id
            }
        };

        // Sign the token with user payload and secret key
        jwt.sign(
            payload,
            process.env.JWT_SECRET, // Make sure you have this secret in your environment variables
            { expiresIn: '1h' }, // Token expiration time
            (err, token) => {
                if (err) throw err;
                res.status(201).json({ message: "User created successfully", token });
            }
        );
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

        // Create JWT payload
        const payload = {
            user: {
                id: user._id
            }
        };

        // Sign the token with user payload and secret key
        jwt.sign(
            payload,
            process.env.JWT_SECRET, // Use the same secret as for registration
            { expiresIn: '1h' }, // Token expiration time
            (err, token) => {
                if (err) throw err;
                res.json({ message: "Logged in successfully", token });
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional user-related methods like profile update, password change, etc.
