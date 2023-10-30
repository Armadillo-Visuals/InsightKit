import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Pool } = require('pg');

const PG_URI =
  'postgres://brkybdbt:eqa7KFIEEl_VaPW1UiNSTYss4RPfKMTw@queenie.db.elephantsql.com/brkybdbt';

const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
