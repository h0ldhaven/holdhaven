import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import StreamPage from './pages/StreamPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

const RouterApp: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<ErrorPage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/streams' element={<StreamPage />} />
                <Route path='/projects' element={<ProjectPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default RouterApp;