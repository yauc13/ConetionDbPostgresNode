"use strict";
const { Client } = require('pg');
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'db_historia_clinica',
    password: 'postgres',
    port: 5432,
};
const client = new Client(connectionData);
client.connect();
client.query('SELECT * FROM config.ecne_enterprises')
    .then((response) => {
    console.log(response.rows);
    client.end();
})
    .catch((err) => {
    client.end();
});
