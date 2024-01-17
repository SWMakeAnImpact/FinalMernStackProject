import React, { useEffect, useState } from 'react';
import TransactionForm from '../../components/TransactionForm/TransactionForm.jsx';
import TransactionList from '../../components/TransactionList/TransactionList.jsx';
import './DashboardPage.css'; // Import your CSS file for styling (if needed)

function DashboardPage() {
    const [transactions, setTransactions] = useState([]);
    const [budgetTotal, setBudgetTotal] = useState(0);

    useEffect(() => {
        // Fetch transactions and set them to state
        // Make a GET request to retrieve existing transactions
        fetch('/api/transactions/all')
            .then((response) => response.json())
            .then((data) => {
                setTransactions(data.transactions || []);
                // Calculate the budget total by summing the amounts of all transactions
                const total = data.transactions.reduce(
                    (accumulator, transaction) => accumulator + transaction.amount,
                    0
                );
                setBudgetTotal(total);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleTransactionSubmit = async (transaction) => {
        try {
            const response = await fetch('/api/transactions/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transaction),
            });

            if (response.ok) {
                const newTransaction = await response.json();
                setTransactions([...transactions, newTransaction]);
                // Update the budget total by adding the new transaction amount
                setBudgetTotal(budgetTotal + newTransaction.amount);
            } else {
                console.error('Transaction creation failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeleteTransaction = async (transactionId) => {
        try {
            const response = await fetch(`/api/transactions/delete/${transactionId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const updatedTransactions = transactions.filter(
                    (transaction) => transaction.id !== transactionId
                );
                setTransactions(updatedTransactions);
                // Update the budget total by subtracting the deleted transaction amount
                const deletedTransaction = transactions.find(
                    (transaction) => transaction.id === transactionId
                );
                setBudgetTotal(budgetTotal - deletedTransaction.amount);
            } else {
                console.error('Transaction deletion failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="budget-total">
                <h2>Budget Total: ${budgetTotal.toFixed(2)}</h2>
            </div>
            <TransactionForm onSubmit={handleTransactionSubmit} />
            <TransactionList
                transactions={transactions}
                onDelete={handleDeleteTransaction}
            />
        </div>
    );
}

export default DashboardPage;
