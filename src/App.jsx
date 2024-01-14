import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
