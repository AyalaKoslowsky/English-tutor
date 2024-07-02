import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Levels.css';

const Levels = () => {
    return (
        <div className="levels">
            <h2>Select a Level</h2>
            <div className="level-options">
                <Link to="/beginner">
                    <img src="./beginner.jpg" alt="Beginner Level" className="level-image" />
                </Link>
                <Link to="/intermediate">
                    <img src="./intermediate.png" alt="Intermediate Level" className="level-image" />
                </Link>
                <Link to="/advanced">
                    <img src="./advanced.png" alt="Advanced Level" className="level-image" />
                </Link>
            </div>
        </div>
    );
};

export default Levels;
