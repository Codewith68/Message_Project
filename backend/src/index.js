import express from 'express';
import { StatusCodes } from 'http-status-codes';
import morgan from'morgan';

import { PORT } from './config/server.config.js';
import { connectDB } from './config/db.config.js';




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



app.get('/', (req, res) => {
  return res.status(StatusCodes.OK).json({
    message: 'Hello World'
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
