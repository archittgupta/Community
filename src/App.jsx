import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Game from './components/Game';
import Forum from './components/Forum';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import Footer from './components/Footer';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Game />} />
                    <Route path="/forum" element={<UpcomingEvents/>} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
    
}


export default App;

