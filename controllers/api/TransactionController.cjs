const Transaction = require('../models/Transaction.cjs');

exports.addTransaction = async (req, res) => {
    try {
        const { user, date, type, amount, category, description } = req.body;

        const newTransaction = new Transaction({ user, date, type, amount, category, description });
        await newTransaction.save();

        res.status(201).json({ message: "Transaction added successfully", transaction: newTransaction });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedTransaction = await Transaction.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        res.json({ message: "Transaction updated successfully", transaction: updatedTransaction });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTransaction = await Transaction.findByIdAndDelete(id);
        if (!deletedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({});
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Additional transaction-related methods as required
