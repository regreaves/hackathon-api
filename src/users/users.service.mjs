import mysqlx from '@mysql/xdevapi';

const config = process.env.MYSQLX_CONFIG;

export async function createUser(user) {
  const { sub } = user;

  const session = await mysqlx.getSession(config);

  const response = await session
      .sql('CALL create_user(?);')
      .bind(sub)
      .execute();

  const data = await response.fetchAll();

  session.close();

  return { data };
}
