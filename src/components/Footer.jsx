import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Chess Community. All rights reserved.</p>
            <div className="footer-links">
                <a href="/terms">
                    <i className="fas fa-chess-king"></i> Terms of Service
                </a>
                <a href="/privacy">
                    <i className="fas fa-chess-queen"></i> Privacy Policy
                </a>
                <a href="/contact">
                    <i className="fas fa-chess-pawn"></i> Contact Us
                </a>
            </div>
        </footer>
    );
}

export default Footer;
