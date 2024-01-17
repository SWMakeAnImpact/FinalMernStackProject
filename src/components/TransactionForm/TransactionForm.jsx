import React, { useState } from 'react';

function TransactionForm({ onSubmit }) {
    // State to store transaction form data
    const [transaction, setTransaction] = useState({
        date: '',
        type: 'Expense', // default to Expense, can also be Income
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
        // Optionally reset the form here
        setTransaction({
            date: '',
            type: 'Expense', // Reset to default type
            amount: '',
            category: '',
            description: ''
        });
    };

    // Rendering a form for adding or editing transactions
    return (
        <form onSubmit={handleSubmit}>
            {/* Date field */}
            <label className='form-field'>
                Date
                <input type="date" value={transaction.date} onChange={handleChange} name="date" />
            </label>
            
            {/* Type field */}
            <label className='form-field'>
                Type
                <select name="type" value={transaction.type} onChange={handleChange}>
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                </select>
            </label>
            
            {/* Amount field */}
            <label className='form-field'>
                Amount
                <input type="number" value={transaction.amount} onChange={handleChange} name="amount" />
            </label>
            
            {/* Category field */}
            <label className='form-field'>
                Category
                <input type="text" value={transaction.category} onChange={handleChange} name="category" />
            </label>
            
            {/* Description field */}
            <label className='form-field'>
                Description
                <textarea value={transaction.description} onChange={handleChange} name="description" />
            </label>
            
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;
