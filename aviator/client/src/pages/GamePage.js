import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './GamePage.css'; // we'll add styles here

const socket = io('http://localhost:3003', {
    path: '/chat',
    transports: ['websocket'],
});

const GamePage = () => {
    const [multiplier, setMultiplier] = useState(1.0);
    const [crashed, setCrashed] = useState(false);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        socket.on('game:multiplier', (val) => {
            setMultiplier(val);
        });

        socket.on('game:crash', () => {
            setCrashed(true);
            setRunning(false);
        });

        return () => {
            socket.off('game:multiplier');
            socket.off('game:crash');
        };
    }, []);

    const startGame = () => {
        socket.emit('game:start');
        setMultiplier(1.0);
        setCrashed(false);
        setRunning(true);
    };

    const stopGame = () => {
        socket.emit('game:stop');
        setRunning(false);
    };

    return (
        <div className="game-container">
            <div className="sky">
                {running && !crashed && (
                    <img
                        src="/plane.png"
                        alt="plane"
                        className="plane"
                        style={{ animationDuration: `${5 + multiplier * 0.5}s` }}
                    />
                )}
                {crashed && <div className="boom">💥 CRASHED!</div>}
            </div>

            <h1 className={`multiplier ${crashed ? 'crashed' : 'safe'}`}>
                {multiplier.toFixed(2)}x
            </h1>

            <div className="controls">
                {!running ? (
                    <button onClick={startGame}>Start</button>
                ) : (
                    <button onClick={stopGame}>Cash Out</button>
                )}
            </div>
        </div>
    );
};

export default GamePage;
