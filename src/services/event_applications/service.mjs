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
  const [ error, data ] = await executeSQL(
      'CALL delete_event_application(?);',
      eventApplicationID);

  return { data, error };
}

export async function listEventApplications() {
  const [ error, data ] = await executeSQL('CALL list_event_applications;');

  return { data, error };
}

export async function readEventApplication(eventApplicationID) {
  const [ error, data ] = await executeSQL(
      'CALL read_event_application(?);',
      eventApplicationID);

  return { data, error };
}

export async function updateEventApplication(eventApplicationID) {
  return;
}
