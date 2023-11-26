import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation: React.FC = () => {
    return (
        <nav className="main-nav">
            <ul className="main-nav-list">
                <li className="main-nav-item">
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;