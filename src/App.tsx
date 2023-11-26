import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './links/MainPage';
import About from './links/About';
import Contacts from './links/Contacts';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Navigation />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;