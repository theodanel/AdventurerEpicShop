import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import App from './App.js';
import Home from './components/Home.js';
import Potions from './components/Potions.js';
import Armes from './components/Armes.js';
import Armures from './components/Armures.js';
import Montures from './components/Montures.js';


const Root = () => (
    <Router>
        <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/potions" element={<Potions />} />
        <Route path="/armes" element={<Armes />} />
        <Route path="/armures" element={<Armures />} />
        <Route path="/montures" element={<Montures />} />


    
        
        </Routes>
    </Router>
);

export default Root;