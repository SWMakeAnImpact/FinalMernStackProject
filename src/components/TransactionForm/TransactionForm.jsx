import React, { useState } from 'react';

function TransactionForm({ onSubmit }) {
    // State to store transaction form data
    const [transaction, setTransaction] = useState({
        date: '',
        type: '',
        amount: '',
        category: '',
        description: ''
    });

    // Function to handle form data changes
    const handleChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(transaction);
    };

    // Rendering a form for adding or editing transactions
    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for each transaction attribute */}
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;
