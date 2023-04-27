import mysqlx from '@mysql/xdevapi';

const config = process.env.MYSQLX_CONFIG;

export async function createUser(user) {
  const { sub } = user;

  const session = await mysqlx.getSession(config);

  let uid;

  const response = await session
      .sql('CALL create_user(?, ?);')
      .bind(sub, uid)
      .execute();

  const data = uid;

  session.close();

  return { data };
}
