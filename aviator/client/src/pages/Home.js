import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Welcome</h1>
        <Link to="/chat">Go to Chat</Link> | <Link to="/game">Go to Game</Link>
    </div>
);

export default Home;
