// src/About.js

import React from 'react';
import './About.css'; // Updated styles

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Our Project</h1>
            <p className="about-intro">
                Welcome to <strong>Let’s Learn Constitution in a Simpler Manner - Institution Perspective</strong>, 
                a React-based application developed for our college's internal hackathon. Our project transforms the 
                complex concepts of the Indian Constitution into an interactive and engaging experience through the 
                classic game of Snake and Ladder.
            </p>

            <h2 className="about-subtitle">Our Mission</h2>
            <p>
                Our mission is to simplify the learning process of the Indian Constitution, focusing on its institutional aspects. 
                We believe that understanding the roles and interactions of key institutions like the Judiciary, Legislature, and Executive 
                is crucial for grasping the foundation of our democracy. By gamifying this learning experience, we aim to make constitutional 
                education more accessible, enjoyable, and memorable for students and learners of all ages.
            </p>

            <h2 className="about-subtitle">What Makes This Project Unique?</h2>
            <ul className="about-list">
                <li>
                    <strong>Interactive Gameplay:</strong> We've merged educational content with the nostalgic fun of Snake and Ladder. 
                    As players progress through the board, they encounter various questions and challenges related to the Constitution. 
                    This approach encourages active learning and keeps the users engaged.
                </li>
                <li>
                    <strong>Institutional Focus:</strong> Our game emphasizes the institutional perspective of the Constitution, helping 
                    players understand how different bodies like the Parliament, Judiciary, and Executive function and interact within the 
                    democratic framework.
                </li>
                <li>
                    <strong>Engaging Design:</strong> With React's powerful UI capabilities, we've created a visually appealing and intuitive 
                    game interface. The game board, player tokens, and interactive elements are all designed to enhance the learning experience.
                </li>
                <li>
                    <strong>Two-Player Mode:</strong> Whether you’re competing against a friend or exploring the game solo, the two-player mode 
                    adds a layer of excitement. It’s not just about who reaches the end first but who learns the most along the way!
                </li>
            </ul>

            <h2 className="about-subtitle">Why React.js?</h2>
            <p>
                We chose React.js for its flexibility, efficiency, and strong community support. React’s component-based architecture allowed 
                us to break down the game into manageable parts, making it easier to develop, test, and enhance. This structure also ensures 
                that our application is scalable and can be extended with new features in the future.
            </p>

            <h2 className="about-subtitle">Educational Value</h2>
            <p>
                Our game is more than just entertainment; it’s a learning tool. By integrating constitutional knowledge into the gameplay, we 
                help players reinforce their understanding of important concepts in a fun and interactive way. This method of learning is 
                particularly effective for students who might find traditional methods of studying the Constitution challenging or dull.
            </p>

            <h2 className="about-subtitle">Join the Journey!</h2>
            <p>
                Dive into the world of the Indian Constitution with us! Whether you’re a law student, a history enthusiast, or simply someone 
                who enjoys a good game, <strong>Let’s Learn Constitution in a Simpler Manner - Institution Perspective</strong> is designed for you. 
                Roll the dice, tackle constitutional challenges, and climb the ladders of knowledge as you compete and learn.
            </p>

            <p className="about-thankyou">
                Thank you for exploring our project. We hope it brings a new dimension to how you understand and appreciate the Indian Constitution!
            </p>
        </div>
    );
}

export default About;
