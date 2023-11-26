import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './links/Home';
import JinKazama from './links/JinKazama';
import KazuyaMishima from './links/KazuyaMishima';
import JunKazama from './links/JunKazama';
import ReinaMishima from './links/ReinaMishima';
import Navigation from './Components/Navigation';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Navigation />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jinkazama" element={<JinKazama />} />
                    <Route path="/kazuyamishima" element={<KazuyaMishima />} />
                    <Route path="/junkazama" element={<JunKazama />} />
                    <Route path="/reinamishima" element={<ReinaMishima />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;