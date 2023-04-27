import mysqlx from '@mysql/xdevapi';

const config = process.env.MYSQLX_CONFIG;

export async function createEventApplication(event_application) {
  const {
    uid,
    age,
    country,
    school,
    edu_lvl,
    edu_completed,
    underrep_group,
    gender,
    pronouns,
    race,
    sexual_orient,
    major,
    t_size,
    food_restrict,
    github,
    linked_in
  } = event_application;
  
  const session = await mysqlx.getSession(config);

  const response = await session
      .sql('CALL create_event_application(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);')
      .bind(uid,
            age, 
            country,
            school,
            edu_lvl,
            edu_completed,
            underrep_group,
            gender,
            pronouns,
            race,
            sexual_orient,
            major,
            t_size,
            food_restrict,
            github,
            linked_in)
      .execute();

  session.close();

  return;
}

export async function getEventApplication(event_application_id) {
  const session = await mysqlx.getSession(config);

  const response = await session
      .sql('CALL get_event_application(?);')
      .bind(event_application_id)
      .execute();

  const data = await response.fetchAll();

  session.close();

  return { data };
}

export async function getEventApplicationsSummary() {
  const session = await mysqlx.getSession(config);

  const response = await session
      .sql('CALL get_event_applications_summary();')
      .execute();

  const data = await response.fetchAll();

  session.close();

  return { data };
}

export async function listEventApplications() {
  const session = await mysqlx.getSession(config);

  const response = await session
      .sql('CALL list_event_applications();')
      .execute();

  const data = await response.fetchAll();

  session.close();

  return { data };
}
