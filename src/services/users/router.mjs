/**
 *
 *  USERS ROUTER
 *
 */

import express from 'express';

import {
  checkRequiredPermissions
} from '../../lib/auth.mjs';

import {
  USERS_PERMISSIONS
} from './permissions.mjs';

import {
  checkInUser,
  createUser,
  deleteUser,
  listUsers,
  readUser,
  updateUser
} from './service.mjs';

const router = express.Router();

router.route('/users')
  .get(
    checkRequiredPermissions(USERS_PERMISSIONS.LIST),
    async (req, res) => {
      const data = await listUsers();

      res.status(200).json(data);
    })
  .post(
    checkRequiredPermissions(USERS_PERMISSIONS.CREATE),
    async (req, res) => {
      await createUser();

      res.status(201).end();
    });

router.route('/users/:user_id')
  .delete(
    checkRequiredPermissions(USERS_PERMISSIONS.DELETE),
    async (req, res) => {
      await deleteUser(req.params.user_id);

      res.status(204).end();
    })
  .get(
    checkRequiredPermissions(USERS_PERMISSIONS.READ),
    async (req, res) => {
      const data =
          await readUser(req.params.user_id);

      res.status(200).json(data);
    })
  .put(
    checkRequiredPermissions(USERS_PERMISSIONS.UPDATE),
    async (req, res) => {
      await updateUser(req.params.user_id);

      // TODO (REG): Finalize this HTTP status code.
      res.status(200).end();
    });

router.route('/users/:user_id/.check_in')
  .post(
    checkRequiredPermissions(USERS_PERMISSIONS.CHECK_IN),
    async (req, res) => {
      const data = await checkInUser(req.params.user_id);

      // TODO (REG): Finalize this HTTP status code.
      res.status(200).json(data);
    }
  );

export { router };
