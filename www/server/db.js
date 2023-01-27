const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: '0808',
    host: "localhost",
    port: 49377,
    database: "base_auth"
});

module.exports = pool;