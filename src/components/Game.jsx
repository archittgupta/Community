import React from 'react';
import { Chessboard } from 'react-chessboard';  // import the chessboard component
import './Game.css'; // assuming you have a Game.css for styles

function Game() {
    return (
        <div className="game">
            <h2>Play Chess</h2>
            <div className="chess-board">
                <Chessboard /> {/* Chessboard UI */}
            </div>
        </div>
    );
}

export default Game;
