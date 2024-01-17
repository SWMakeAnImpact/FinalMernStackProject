const express = require('express');
const router = express.Router();
const { addTransaction, updateTransaction, deleteTransaction, getTransactions } = require('../../controllers/api/TransactionController.cjs');


// Add a new transaction
router.post('/add', addTransaction);

// Edit a transaction
router.put('/edit/:id', updateTransaction);

// Delete a transaction
router.delete('/delete/:id', deleteTransaction);

// Get all transactions for a user
router.get('/all', getTransactions);

// ... other transaction-related routes ...

module.exports = router;
