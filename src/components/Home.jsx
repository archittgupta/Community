import React, { useState } from 'react';
import './Home.css';  // assuming you have a Home.css for styles
import Signup from './Signup';  // import the Signup form

function Home() {
    const [showSignup, setShowSignup] = useState(false);

    const handleShowSignup = () => {
        setShowSignup(true);  // Show the signup form when the button is clicked
    };

    const handleHideSignup = () => {
        setShowSignup(false);  // Hide the signup form when clicked again
    };

    return (
        <div className="home">
            {!showSignup ? (
                <div>
                    <h2>Welcome to the Chess Community!</h2>
                    <p>Join games, discuss strategies, and climb the leaderboard!</p>
                    <button className="join-btn" onClick={handleShowSignup}>
                        Sign Up
                    </button>
                </div>
            ) : (
                <Signup /> 
            )}
        </div>
    );
}

export default Home;
