// src/Dice.js

import React from 'react';
import './Dice.css';

const Dice = ({ roll }) => {
    return (
        <div className="dice">
            <div className={`dice-face dice-${roll}`}>
                {Array.from({ length: roll }, (_, i) => (
                    <span key={i} className="dot"></span>
                ))}
            </div>
        </div>
    );
};

export default Dice;
