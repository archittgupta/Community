import React from 'react';
import './Leaderboard.css';

function Leaderboard() {
    const players = [
        { name: "Player1", score: 1200 },
        { name: "Player2", score: 1100 },
        { name: "Player3", score: 1000 },
    ];

    // Sort players by score in descending order
    const sortedPlayers = players.sort((a, b) => b.score - a.score);

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPlayers.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
