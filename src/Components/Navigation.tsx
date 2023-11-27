import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation: React.FC = () => {
    return (
        <nav className="main-nav-top">
            <ul className="main-nav-list-top">
                <li className="main-nav-item-top">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="main-nav-item-top">
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
                <li className="main-nav-item-top">
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;