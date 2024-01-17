import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/dashboard" element={<DashboardPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;