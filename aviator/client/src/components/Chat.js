import React, { useState, useEffect } from 'react';
import socket from '../services/socket';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState([]);

    useEffect(() => {
        // Connect only if not already connected
        if (!socket.connected) {
            socket.connect();
        }

        const handleReply = (msg) => {
            setChatLog((prev) => [...prev, msg]);
        };

        socket.on('connect', () => {
            console.log('✅ Connected to server');
        });

        socket.on('server-reply', handleReply);

        socket.on('disconnect', () => {
            console.log('❌ Disconnected from server');
        });

        return () => {
            socket.off('server-reply', handleReply);
            socket.off('connect');
            socket.off('disconnect');
            // ❌ Don't call socket.disconnect() here — it breaks shared usage
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('chat-message', message);
            setMessage('');
        }
    };

    return (
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>WebSocket Chat</h3>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                style={{ padding: '0.5rem', width: '60%' }}
            />
            <button onClick={sendMessage} style={{ marginLeft: '0.5rem', padding: '0.5rem' }}>
                Send
            </button>

            <div style={{ marginTop: '1rem' }}>
                {chatLog.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default Chat;
