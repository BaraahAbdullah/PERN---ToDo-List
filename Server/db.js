const pool = require("pg").pool;


const pool = new pool({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 4000,
    database: "perntodo"
});

module.exports = pool;