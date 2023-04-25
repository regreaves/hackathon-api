import mysqlx from '@mysql/xdevapi';

const config = process.env.MYSQLX_CONFIG;

export async function listEventApplications() {
  const session = await mysqlx.getSession(config);

  const response = await session
      .sql('CALL list_event_applications();')
      .execute();

  const data = await response.fetchAll();

  session.close();

  return { data };
}
