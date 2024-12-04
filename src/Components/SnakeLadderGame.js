// src/SnakeLadderGame.js

import React, { useState } from 'react';
import './SnakeLadderGame.css';
import { useSpring, animated } from 'react-spring';
import Dice from './Dice';
import AnswerInput from './AnswerInput';

const boardSize = 10;
const initialPositions = Array.from({ length: boardSize * boardSize }, (_, i) => i + 1);

const snakes = {
    17: 7,
    54: 34,
    62: 19,
    64: 60,
    87: 36,
    93: 73,
    95: 75,
    99: 78,
};

const ladders = {
    4: 14,
    9: 31,
    20: 38,
    28: 84,
    40: 59,
    51: 67,
    63: 81,
    71: 91,
};

const constitutionQuestions = [
    {
        question: "What is the Preamble of the Constitution?",
        answer: "introduction",
    },
    {
        question: "Name the three organs of the Indian government.",
        answer: "judiciary, legislature, executive",
    },
    {
        question: "What does the Right to Equality entail?",
        answer: "equal treatment under the law",
    },
    {
        question: "Who is the head of the State in India?",
        answer: "president",
    },
    {
        question: "What does the term 'Secular' mean in the Indian context?",
        answer: "no state religion",
    },
];

const SnakeLadderGame = () => {
    const [playerPosition, setPlayerPosition] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [diceRoll, setDiceRoll] = useState(1);
    const [points, setPoints] = useState(0);
    const [isAnswering, setIsAnswering] = useState(false);

    const { transform } = useSpring({
        transform: `rotate(${360 * diceRoll}deg)`,
    });

    const rollDice = () => {
        if (isAnswering) return; // Prevent rolling while answering

        const roll = Math.floor(Math.random() * 6) + 1;
        setDiceRoll(roll);
        setTimeout(() => {
            movePlayer(roll);
            askQuestion();
        }, 500);
    };

    const movePlayer = (roll) => {
        let newPosition = playerPosition + roll;
        if (newPosition > 100) newPosition = playerPosition; // Stay if overshooting

        setPlayerPosition(newPosition);
    };

    const askQuestion = () => {
        const randomIndex = Math.floor(Math.random() * constitutionQuestions.length);
        setCurrentQuestion(constitutionQuestions[randomIndex]);
        setIsAnswering(true);
    };

    const handleAnswerSubmit = (answer) => {
        if (!currentQuestion) return;

        const normalizedAnswer = answer.toLowerCase().trim();
        const correctAnswer = currentQuestion.answer.toLowerCase().trim();

        if (normalizedAnswer === correctAnswer) {
            // Correct answer, climb ladder if applicable
            const ladderPosition = ladders[playerPosition];
            if (ladderPosition) {
                setPlayerPosition(ladderPosition);
            }
            setPoints(points + 10);
        } else {
            // Wrong answer, move to the snake's tail if applicable
            const snakeTailPosition = snakes[playerPosition];
            if (snakeTailPosition) {
                setPlayerPosition(snakeTailPosition);
            } else {
                // If no snake at the current position, move down by a fixed number of tiles
                let newPosition = playerPosition - 5;
                if (newPosition < 1) newPosition = 1; // Ensure player doesn't go below 1
                setPlayerPosition(newPosition);
            }
        }

        setCurrentQuestion(null);
        setIsAnswering(false);
    };

    return (
        <div className="game-container">
            <h1>Snake & Ladder: Learn the Constitution</h1>
            <div className="board-container">
                {initialPositions.map((position) => (
                    <div
                        key={position}
                        className={`board-tile ${
                            position === playerPosition ? 'player-tile' : ''
                        }`}
                    >
                        {position}
                    </div>
                ))}
            </div>
            <div className="controls">
                <animated.div style={{ transform }}>
                    <Dice roll={diceRoll} />
                </animated.div>
                <button onClick={rollDice} className="roll-button">
                    Roll Dice
                </button>
                {isAnswering && currentQuestion && (
                    <AnswerInput
                        question={currentQuestion.question}
                        onSubmit={handleAnswerSubmit}
                    />
                )}
                <div className="points-display">Points: {points}</div>
            </div>
        </div>
    );
};

export default SnakeLadderGame;
