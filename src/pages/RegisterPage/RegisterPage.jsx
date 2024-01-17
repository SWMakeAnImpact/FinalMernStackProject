import React, { useState } from 'react';
import './RegisterPage.css'; // Make sure to create this CSS file in the same directory
import Popup from '../../components/PopUp/PopUp.jsx';

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmissionStatus('Submitting...');

        try {
            const response = await fetch('/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                // Handle success scenario, e.g., set a success message, redirect user, etc.
                setSubmissionStatus('Account created successfully!');
                setShowPopup(true); // Show the popup
                // You can reset the form if needed
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                });
            } else {
                // If the server response was not ok, handle errors, e.g., show error message
                // Simulate an API call
                setTimeout(() => {
                    // This is where you would typically handle the API response
                    // For demonstration, we're just setting an error message after a delay
                    setSubmissionStatus("Registration failed. Please try again later.");
                    setShowPopup(true); // Show the popup
                }, 2000);
            }
        } catch (error) {
            // Handle any exceptions or network errors here
            console.error('Error:', error);
            setSubmissionStatus("An error occurred. Please try again later.");
            setShowPopup(true); // Show the popup
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Register</button>
            </form>
            {showPopup && (
                <Popup message={submissionStatus} onClose={closePopup} />
            )}
        </div>
    );
}

export default RegisterPage;
