import express from 'express';

import {
  CREATE_EVENT_APPLICATION_PERMISSIONS,
  GET_EVENT_APPLICATION_PERMISSIONS,
  GET_EVENT_APPLICATIONS_SUMMARY_PERMISSIONS,
  LIST_EVENT_APPLICATIONS_PERMISSIONS
} from './event_applications.permissions.mjs';

import {
  createEventApplication,
  getEventApplication,
  getEventApplicationSummary,
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

router.post('/event_applications',
           validateAccessToken,
           checkRequiredPermissions(CREATE_EVENT_APPLICATION_PERMISSIONS),
           async (req, res) => {
  const data = await createEventApplication(req.body.event_application);

  res.status(200).json(data);
});

router.get('/event_applications/:event_application_id',
           validateAccessToken,
           checkRequiredPermissions(GET_EVENT_APPLICATION_PERMISSIONS),
           async (req, res) => {
  const data = await getEventApplication(req.params.event_application_id);

  res.status(200).json(data);
});

router.get('/event_applications/summary',
           validateAccessToken,
           checkRequiredPermissions(GET_EVENT_APPLICATIONS_SUMMARY_PERMISSIONS),
           async (req, res) => {
  const data = await getEventApplicationSummary();

  res.status(200).json(data);
});

export { router };
