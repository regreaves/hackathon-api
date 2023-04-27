import express from 'express';

import {
  CREATE_USER_PERMISSIONS
} from './users.permissions.mjs';

import {
  createUser
} from './users.service.mjs';

import {
  checkRequiredPermissions,
  validateAccessToken
} from '../lib/auth.mjs';

const router = express.Router();

router.post('/users',
            validateAccessToken,
            checkRequiredPermissions(CREATE_USER_PERMISSIONS),
            async (req, res) => {
  await createUser(req.body.user);

  res.status(201).end();
});

export { router };
