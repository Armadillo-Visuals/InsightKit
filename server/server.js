const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
//const controller = require('./controller');
const PORT = 3000;
// const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('src'));

const apiRouter = require('./routes/api');
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
// });

app.use('/api', apiRouter);

// for any requests from front end to the endpoint ____, use the api router

// general catch all error for page not found
app.use((req, res) => {
  return res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
