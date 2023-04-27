import express from 'express';

import {
  CREATE_USER_PERMISSIONS,
  GET_USER_PERMISSIONS
} from './users.permissions.mjs';

import {
  createUser,
  getUser
} from './users.service.mjs';

import {
  checkRequiredPermissions,
  validateAccessToken
} from '../lib/auth.mjs';

const router = express.Router();

router.get('/users',
            validateAccessToken,
            checkRequiredPermissions(GET_USER_PERMISSIONS),
            async (req, res) => {
  const data = await getUser(req.body.user);

  res.status(200).json(data);
});

router.post('/users',
            validateAccessToken,
            checkRequiredPermissions(CREATE_USER_PERMISSIONS),
            async (req, res) => {
  await createUser(req.body.user);

  res.status(201).end();
});

export { router };
