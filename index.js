const express = require('express');

const server = express();

const carRouter = require('./data/router/carRouter.js');

server.use(express.json());

server.use('/api/cars/', carRouter);

server.get('/', (req, res) => {
  res.send(`<h2>API up!</h2>`)
});

server.listen(4000, () => {
    console.log('\n* Server Running on http://localhost:4000 *\n');
  });
