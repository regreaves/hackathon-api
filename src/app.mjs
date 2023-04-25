/**
 *
 *  API APPLICATION
 *
 */

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import nocache from 'nocache';

import {
  router as event_applications
} from './event_applications/event_applications.router.mjs';

const app = express();

app.use(express.json());

/*
app.use(helmet({
  ...
}));
*/

app.use(nocache());

app.use(cors({
  allowedHeaders: [ 'Authorization', 'Content-Type' ]
}));

app.use('/api/v2023-04-24', event_applications);

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({
    message: err.message
  });
});

export { app };
