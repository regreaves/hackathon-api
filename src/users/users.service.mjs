import mysqlx from '@mysql/xdevapi';

const config = process.env.MYSQLX_CONFIG;

export async function createUser(user) {
  const sub = user.sub;

  const session = await mysqlx.getSession(config);

  const response = await sesssion
      .sql('CALL create_user(?);')
      .bind(sub)
      .execute();

  session.close();

  return;
}
