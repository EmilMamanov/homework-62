import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import jinKazamaImage from '../assets/jin-kazama.jpg';
import kazuyaMishimaImage from '../assets/kazuya-mishima.jpg';
import junKazamaImage from '../assets/jun-kazama.jpeg';
import reinaMishimaImage from '../assets/reina-mishima.jpg';

const Home: React.FC = () => {
    return (
        <div className="main-block">
            <h1>Welcome To The Iron Fist Tournament 8!</h1>
            <h2>Choose your fighter</h2>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li className="main-nav-item">
                        <NavLink to="/jinkazama">
                            <img className="link-img" src={jinKazamaImage} alt="Jin Kazama" />
                            Jin Kazama
                        </NavLink>
                    </li>
                    <li className="main-nav-item">
                        <NavLink to="/kazuyamishima">
                            <img className="link-img" src={kazuyaMishimaImage} alt="Kazuya Mishima" />
                            Kazuya Mishima
                        </NavLink>
                    </li>
                    <li className="main-nav-item">
                        <NavLink to="/junkazama">
                            <img className="link-img" src={junKazamaImage} alt="Jun Kazama" />
                            Jun Kazama
                        </NavLink>
                    </li>
                    <li className="main-nav-item">
                        <NavLink to="/reinamishima">
                            <img className="link-img" src={reinaMishimaImage} alt="Reina Mishima" />
                            Reina Mishima
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;