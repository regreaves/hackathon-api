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

import {
  router as hardware_items
} from './hardware_items/hardware_items.router.mjs';

import {
  router as users
} from './users/users.router.mjs';

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

app.use('/', [
  event_applications,
  hardware_items,
  users
]);

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({
    message: err.message
  });
});

export { app };
