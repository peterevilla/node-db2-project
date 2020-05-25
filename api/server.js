const express = require('express');
const server = express();
const db = require('../data/db-config')
const CarRouter = require('../routes/carsRouter')
server.use(express.json());
server.use('/api/cars', CarRouter)

server.get('/', (req, res) => {
    res.send('<h1>API</h1>')
})


module.exports = server;