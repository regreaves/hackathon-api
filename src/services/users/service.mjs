/**
 *
 *  USERS SERVICE
 *
 */

import {
  executeSQL
} from '../../lib/database.mjs';

export async function checkInUser(userID) {
  const [ err, data ] = await executeSQL(
      'CALL check_in_user(?);',
      userID);

  return { err, data };
}

export async function createUser() {
  return;
}

export async function deleteUser(userID) {
  const [ err, data ] = await executeSQL(
      'CALL delete_user(?);',
      userID);

  return { err, data };
}

export async function listUsers() {
  const [ err, data ] = await executeSQL('CALL list_users;');

  return { err, data };
}

export async function readUser(subject) {
  const [ err, data ] = await executeSQL(
      'CALL read_user(?);',
      subject);

  return { err, data };
}

export async function updateUser(userID) {
  return;
}
