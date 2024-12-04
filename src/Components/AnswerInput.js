// src/AnswerInput.js

import React, { useState } from 'react';
import './AnswerInput.css';

const AnswerInput = ({ question, onSubmit }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(answer);
        setAnswer(''); // Clear input after submission
    };

    return (
        <div className="answer-container">
            <p className="question">{question}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer here"
                    className="answer-input"
                    required
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AnswerInput;
