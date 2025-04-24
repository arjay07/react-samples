import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Navbar from '../ui/Navbar';
import { routes } from './routeConfig';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;