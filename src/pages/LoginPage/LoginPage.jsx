import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file for styling (if needed)
import Popup from '../../components/PopUp/PopUp.jsx'; // Import the Popup component (if needed)

function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
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
        setSubmissionStatus('Logging in...');

        try {
            // Perform login logic here (e.g., API request to authenticate user)

            // For demonstration purposes, let's assume a successful login
            // You should replace this with actual authentication logic
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // If login is successful, set success message and show popup
                setSubmissionStatus('Logged in successfully!');
                setShowPopup(true);

                // You can redirect the user to another page on successful login

                // You can also reset the form if needed
                setFormData({
                    username: '',
                    password: '',
                });
            } else {
                // If the server response was not ok, handle login errors
                setSubmissionStatus("Login failed. Please check your credentials.");
                setShowPopup(true);
            }
        } catch (error) {
            // Handle login errors here
            console.error('Error:', error);
            setSubmissionStatus("Login failed. Please check your credentials.");
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                {/* Input fields for username and password */}
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
            {showPopup && (
                <Popup message={submissionStatus} onClose={closePopup} />
            )}
        </div>
    );
}

export default LoginPage;
