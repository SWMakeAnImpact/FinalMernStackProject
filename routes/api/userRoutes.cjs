const express = require('express');
const router = express.Router();
const { register, login } = require('../../controllers/api/UserController.cjs');

// Register a new user
router.post('/register', register);

// User login
router.post('/login', login);

// ... other user-related routes ...

module.exports = router;
