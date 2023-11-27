import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import jinKazamaImage from '../assets/jin-kazama.jpg';
import kazuyaMishimaImage from '../assets/kazuya-mishima.jpg';
import junKazamaImage from '../assets/profiles/jun-profile.png';
import reinaMishimaImage from '../assets//profiles/reina-profile.png';

const Home: React.FC = () => {
    return (
        <div className="main-block">
            <h1>Welcome To The Iron Fist Tournament 8!</h1>
            <h2>Choose your fighter</h2>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li className="main-nav-item">
                        <NavLink to="/jinkazama">
                            <div className="image-wrap">
                            <img className="link-img" src={jinKazamaImage} alt="Jin Kazama" />
                            </div>
                            Jin Kazama
                        </NavLink>
                    </li>
                    <li className="main-nav-item">
                        <NavLink to="/kazuyamishima">
                            <div className="image-wrap">
                            <img className="link-img" src={kazuyaMishimaImage} alt="Kazuya Mishima" />
                            </div>
                            Kazuya Mishima
                        </NavLink>
                    </li>
                    <li className="main-nav-item">
                        <NavLink to="/junkazama">
                            <div className="image-wrap">
                            <img className="link-img" src={junKazamaImage} alt="Jun Kazama" />
                            </div>
                            Jun Kazama
                        </NavLink>
                    </li>
                    <li className="main-nav-item">
                        <NavLink to="/reinamishima">
                            <div className="image-wrap">
                            <img className="link-img" src={reinaMishimaImage} alt="Reina Mishima" />
                            </div>
                            Reina Mishima
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;