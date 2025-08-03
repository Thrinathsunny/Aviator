import 'reflect-metadata'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { AppDataSource } from './database/db.js'

import SignupRoute from './routes/signin.route.js'

import {createServer} from 'http'
import { Server } from 'socket.io'
import { startGame, stopGame } from '../server/service/gameLoop.js';





const app = express()

const httpServer = createServer(app)

const io = new Server(httpServer,{
    path: '/chat',
    cors: {
        origin: '*',
        methods: ['POST', 'GET']
    },
    transports: ['websocket']
})

io.on('connection', (socket) => {
    console.log('✅ client connected via chat');

    socket.on('chat-message', (msg) => {
        console.log('📨 client sent message:', msg);
        socket.emit('server-reply', `Echo: ${msg}`);
    });

    socket.on('game:start', () => {
        startGame(io); // call game loop
    });

    socket.on('game:stop', () => {
        stopGame(io); // stop game
    });

    socket.on('disconnect', () => {
        console.log('❌ Client disconnected');
    });
});


app.use(express.json())
app.use(cors())

app.use('/', SignupRoute)
AppDataSource.initialize().then(() => {
    httpServer.listen(3003, () => {
        console.log('server is running on port ')
    })
 
}).catch((err) => {
    console.log(err)
})
