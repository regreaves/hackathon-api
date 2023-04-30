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
  validateAccessToken
} from './lib/auth.mjs';

import {
  router as event_applications
} from './services/event_applications/router.mjs';

import {
  router as hardware_items
} from './services/hardware_items/router.mjs';

const app = express();

app.use(cors({
  allowedHeaders: [
    'Authorization',
    'Content-Type'
  ]
}));
app.use(express.json());
/*
app.use(helmet({

}));
*/
app.use(nocache());

app.use('/api', validateAccessToken(), [
  event_applications,
  hardware_items
]);

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({
    message: err.message
  });
});

export { app };
