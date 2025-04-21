import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const RouterApp: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<ErrorPage />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default RouterApp;