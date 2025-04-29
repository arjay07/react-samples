import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routeConfig';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="branding">
                    <Link to="/">
                        React Component Samples
                    </Link>
                </div>
                <div className="dropdown">
                    <button className="dropdown-button">
                        Samples&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    <div className="dropdown-content">
                        {routes.map((route) => (
                            <Link key={route.path} to={route.path} className="dropdown-item">
                                {route.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;