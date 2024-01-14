const express = require('express');
const userRoutes = require('./routes/userRoutes.cjs');
const transactionRoutes = require('./routes/transactionRoutes.cjs');

const app = express();
app.use(express.json());

// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

// ... rest of your server setup ...

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
