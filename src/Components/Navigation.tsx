import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;