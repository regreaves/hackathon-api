import express from 'express';

import {
  LIST_EVENT_APPLICATIONS_PERMISSIONS
} from './event_applications.permissions.mjs';

import {
  listEventApplications
} from './event_applications.service.mjs';

import {
  checkRequiredPermissions,
  validateAccessToken
} from '../lib/auth.mjs';

const router = express.Router();

router.get('/event_applications',
           validateAccessToken,
           checkRequiredPermissions(LIST_EVENT_APPLICATIONS_PERMISSIONS),
           async (req, res) => {
  const data = await listEventApplications();

  res.status(200).json(data);
});

export { router };
