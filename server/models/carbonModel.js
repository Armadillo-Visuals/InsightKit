const { Pool } = require('pg');
const PG_URI =
  'postgres://htzenchd:Kqhw9-CFwrFa7-w5ld3t4sjUX9jVd7LC@raja.db.elephantsql.com/htzenchd';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
