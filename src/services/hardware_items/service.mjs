import {
  executeSQL
} from '../../lib/database.mjs';

export async function checkHardwareItem(hardwareItemID, userID) {
  const [ err, data ] = await executeSQL(
//      'CALL check_hardware_item(?, ?);',
      'SELECT ?, ?;',
      hardwareItemID,
      userID);

  return { err, data };
}

export async function createHardwareItem() {
  return;
}

export async function deleteHardwareItem(hardwareItemID) {
  const [ err, data ] = await executeSQL(
      'CALL delete_hardware_item(?);',
      hardwareItemID);

  return { err, data };
}

export async function listHardwareItems() {
  const [ err, data ] = await executeSQL('CALL list_hardware_items;');

  return { err, data };
}

export async function readHardwareItem(hardwareItemID) {
  const [ err, data ] = await executeSQL(
      'CALL read_hardware_item(?);',
      hardwareItemID);

  return { err, data };
}

export async function updateHardwareItem(hardwareItemID) {
  return;
}
