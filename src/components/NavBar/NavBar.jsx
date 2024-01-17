import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    // This is a functional component rendering a navigation bar
    return (
        <nav>
            <Link to="/">Home</Link> {/* Link to the Home page */}
            <Link to="/dashboard">Dashboard</Link> {/* Link to the Dashboard page */}
            <Link to="/login">Login</Link> {/* Link to the Login page */}
            <Link to="/register">Register</Link> {/* Link to the Register page */}
        </nav>
    );
}

export default Navbar; // Exporting the component to be used in other files