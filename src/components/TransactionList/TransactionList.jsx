import React from 'react';

function TransactionList({ transactions }) {
    // This component lists all transactions
    return (
        <ul>
            {transactions.map(transaction => (
                <li key={transaction.id}>
                    {transaction.date} - {transaction.amount}
                </li>
            ))}
        </ul>
    );
}

export default TransactionList;
