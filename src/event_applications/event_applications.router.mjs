import express from 'express';

import {
  GET_EVENT_APPLICATION_PERMISSIONS,
  LIST_EVENT_APPLICATIONS_PERMISSIONS
} from './event_applications.permissions.mjs';

import {
  getEventApplication,
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

router.get('/event_applications/:event_application_id',
           validateAccessToken,
           checkRequiredPermissions(GET_EVENT_APPLICATION_PERMISSIONS),
           async (req, res) => {
  const data = await getEventApplication(req.params.event_application_id);

  res.status(200).json(data);
});

export { router };
