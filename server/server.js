import express from 'express';
import path from 'path';
import cors from 'cors';
// import { dataRouter } from './routes/data.js';
import dataRouter from './routes/data.js';

import usersRouter from './routes/users.js';

const app = express();
const PORT = 3000;
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client')));

// app.use(express.static('src'));

// if (process.env.NODE_ENV === 'production') {
//   // statically serve everything in the build folder on the route '/build'
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
//   });
// }

// for any requests from front end to the endpoint '/data', use the disaster data router
app.use('/data', dataRouter);
app.use('/users', usersRouter);

// general catch all error for page not found
app.use((req, res) => {
  return res.status(404).json({ err: 'Page not found' });
});

// global error handler
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

// listening on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;
