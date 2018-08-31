
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('../middleware/cors');
const socketIO = require('socket.io');

module.exports = (app, port) => {

    app.use(express.static(path.join(__dirname, '../views')));
    app.use(cors);
    const server = http.createServer(app)
    const io = socketIO.listen(server);
    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    })
    io.on('connection', (socket) => {
        console.log('A user has connected.');

        socket.on('disconnect', () => {
            console.log('User has disconnected.');
        })

    })

}