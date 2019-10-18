"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { Client } = require('pg');
class Server {
    constructor() {
        this.connectionData = {
            user: 'postgres',
            host: 'localhost',
            database: 'db_historia_clinica',
            password: 'postgres',
            port: 5432,
        };
        this.app = express_1.default();
        this.config();
        this.routes();
        this.connectionDb();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
    }
    star() {
        this.app.listen(this.app.get('port'));
        console.log('servido iniciado y escuchabdo en puerto' + this.app.get('port'));
    }
    connectionDb() {
        console.log('entra a conection base de datos');
        const client = new Client(this.connectionData);
        client.connect();
        client.query('SELECT * FROM config.ecne_enterprises')
            .then((response) => {
            console.log(response.rows);
            client.end();
        })
            .catch((err) => {
            client.end();
        });
    }
}
const ser = new Server();
ser.star();
