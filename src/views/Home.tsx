import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routeConfig';

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <h1 className='home-header'>React Component Samples</h1>
            <div className='home-byline'>By Leandro Yabut</div>
            <div className='home-flowing-links'>
                {routes.map((route) => (
                    <Link key={route.path} to={route.path} className='home-link'>
                        {route.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;