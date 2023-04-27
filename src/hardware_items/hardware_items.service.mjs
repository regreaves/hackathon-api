import mysqlx from '@mysql/xdevapi';

const config = process.env.MYSQLX_CONFIG;

export async function createHardwareItem(name, link, category, status, location) {
  
  const session = await mysqlx.getSession(config);

  const response = await session
      .sql('CALL create_hardware_item(?, ?, ?, ?, ?);')
      .bind(name, link, category, status, location)
      .execute();

  session.close();

  return;
}

export async function listHardwareItems() {
  const session = await mysqlx.getSession(config);

  const response = await session
      .sql('CALL list_hardware_items();')
      .execute();

  const data = await response.fetchAll();

  session.close();

  return { data };
}
