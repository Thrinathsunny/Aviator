import { io } from 'socket.io-client'

const socket = io('http://localhost:3003', {
    path: '/chat',
    transports: ['websocket'],
})

export default socket;