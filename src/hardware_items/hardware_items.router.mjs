import express from 'express';

import {
  CREATE_HARDWARE_ITEMS_PERMISSIONS,
  LIST_HARDWARE_ITEMS_PERMISSIONS
} from './hardware_items.permissions.mjs';

import {
  createHardwareItem,
  listHardwareItems
} from './hardware_items.service.mjs';

import {
  checkRequiredPermissions,
  validateAccessToken
} from '../lib/auth.mjs';

const router = express.Router();

router.get('/hardware_items',
           validateAccessToken,
           checkRequiredPermissions(LIST_HARDWARE_ITEMS_PERMISSIONS),
           async (req, res) => {
  const data = await listHardwareItems();

  res.status(200).json(data);
});

router.post('/hardware_items',
            validateAccessToken,
            checkRequiredPermissions(CREATE_HARDWARE_ITEMS_PERMISSIONS),
            async (req, res) => {
  const { name, link, category, status, location } = req.body;

  await createHardwareItem(name, link, category, status, location);

  res.status(201).end();
});

export { router };
