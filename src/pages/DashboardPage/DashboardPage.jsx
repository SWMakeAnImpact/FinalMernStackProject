import React, { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
// Import API utility for fetching transactions

function DashboardPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch transactions and set them to state
    }, []);

    const handleTransactionSubmit = (transaction) => {
        // Submit new transaction logic
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <TransactionForm onSubmit={handleTransactionSubmit} />
            <TransactionList transactions={transactions} />
        </div>
    );
}

export default DashboardPage;
