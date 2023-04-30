/**
 *
 *  EVENT APPLICATIONS SERVICE
 *
 */

import {
  executeSQL
} from '../../lib/database.mjs';

export async function createEventApplication() {
  return;
}

export async function deleteEventApplication(eventApplicationID) {
  const [ err, data ] = await executeSQL(
      'CALL delete_event_application(?);',
      eventApplicationID);

  return { err, data };
}

export async function listEventApplications() {
  const [ err, data ] = await executeSQL('CALL list_event_applications;');

  return { err, data };
}

export async function readEventApplication(eventApplicationID) {
  const [ err, data ] = await executeSQL(
      'CALL read_event_application(?);',
      eventApplicationID);

  return { err, data };
}

export async function updateEventApplication(eventApplicationID) {
  return;
}
