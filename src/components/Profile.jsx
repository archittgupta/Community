import React from 'react';
import './Profile.css';

function Profile() {
    const user = {
        username: "ChessMaster",
        rating: 1500,
        gamesPlayed: 50,
    };

    return (
        <div className="profile">
            <h2>{user.username}'s Profile</h2>
            <div className="profile-info">
                <p><strong>Rating:</strong> {user.rating}</p>
                <p><strong>Games Played:</strong> {user.gamesPlayed}</p>
            </div>
        </div>
    );
}

export default Profile;
