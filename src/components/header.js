import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    const [ showMenu, setShowMenu ] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className="header-wrapper">
            <div className="logo-container">
                <img src="logo192.png" alt="Logo" className="navbar-logo" />
                <h1 className="logo-title">MarketPlace Freelance</h1>
            </div>

            <nav className="navbar">
                <ul className="navbar-links">
                    <li>
                        <Link to="/home" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/team" onClick={closeMenu}>
                            Our Team
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={closeMenu}>
                            Services & Products
                        </Link>
                    </li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </nav>

            {showMenu && (
                <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
                    <button className="close-menu" onClick={closeMenu}>
                        ✕
                    </button>
                    <ul>
                        <li>
                            <Link to="/home" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeMenu}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" onClick={closeMenu}>
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={closeMenu}>
                                Services & Products
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
