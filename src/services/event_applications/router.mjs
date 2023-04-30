import express from 'express';

import {
  checkRequiredPermissions
} from '../../lib/auth.mjs';

import {
  EVENT_APPLICATIONS_PERMISSIONS
} from './permissions.mjs';

import {
  createEventApplication,
  deleteEventApplication,
  listEventApplications,
  readEventApplication,
  updateEventApplication
} from './service.mjs';

const router = express.Router();

router.route('/event_applications')
  .get(
    checkRequiredPermissions(EVENT_APPLICATIONS_PERMISSIONS.LIST),
    async (req, res) => {
      const result = await listEventApplications();

      res.status(200).json(result);
    })
  .post(
    checkRequiredPermissions(EVENT_APPLICATIONS_PERMISSIONS.CREATE),
    async (req, res) => {
      await createEventApplication();

      res.status(201).end();
    });

router.route('/event_applications/:event_application_id')
  .delete(
    checkRequiredPermissions(EVENT_APPLICATIONS_PERMISSIONS.DELETE),
    async (req, res) => {
      await deleteEventApplication(req.params.event_application_id);

      res.status(204).end();
    })
  .get(
    checkRequiredPermissions(EVENT_APPLICATIONS_PERMISSIONS.READ),
    async (req, res) => {
      const result =
          await readEventApplication(req.params.event_application_id);

      res.status(200).json(result);
    })
  .put(
    checkRequiredPermissions(EVENT_APPLICATIONS_PERMISSIONS.UPDATE),
    async (req, res) => {
      await updateEventApplication(req.params.event_application_id);

      // TODO (REG): Finalize this HTTP status code.
      res.status(200).end();
    });

export { router };
