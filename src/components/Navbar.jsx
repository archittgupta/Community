import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>
                <i className="fas fa-chess-king"></i> Chess Community
            </h1>
            <ul>
                <li><a href="/"><i className="fas fa-chess-board"></i> Home</a></li>
                <li><a href="/games"><i className="fas fa-chess-pawn"></i> Games</a></li>
                <li><a href="/forum"><i className="fas fa-chess-knight"></i> Forum</a></li>
                <li><a href="/leaderboard"><i className="fas fa-chess-queen"></i> Leaderboard</a></li>
                <li><a href="/profile"><i className="fas fa-chess-bishop"></i> Profile</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
