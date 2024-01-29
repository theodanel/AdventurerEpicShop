import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import App from './App.js';
import Home from './components/Home.js';
import Potions from './components/Potions.js';

const Root = () => (
    <Router>
        <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/potions" element={<Potions />} />


    
        
        </Routes>
    </Router>
);

export default Root;