// This file will contain functions to interact with your backend API.

const BASE_URL = 'http://localhost:3001'; // Replace with your server's URL

// Function to fetch transactions
export const fetchTransactions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/transactions`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
    }
};

// Function to add a new transaction
export const addTransaction = async (transactionData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/transactions/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transactionData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error adding transaction:", error);
        throw error;
    }
};

// Add more functions for updating and deleting transactions, user authentication, etc.
