import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Pool } = require('pg');

const PG_URI =
  'postgres://rbdhomwq:6Wj079JnBJ4SBnXfi03oPOLb2kxpf0FB@queenie.db.elephantsql.com/rbdhomwq';

const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
