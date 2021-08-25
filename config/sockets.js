import { app } from '../index'
import http from 'http'
import { Server } from 'socket.io';

const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('A user is connected');

  socket.on('message', (message) => {
    console.log(`message from ${socket.id} : ${message}`);
  })

  socket.on('disconnect', () => {
    console.log(`socket ${socket.id} disconnected`);
  })
})

export default io;