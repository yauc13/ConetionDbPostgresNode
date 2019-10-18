
import express, {Application, application} from 'express';

const { Client } = require('pg')
class Server{


     connectionData = {
        user: 'postgres',
        host: 'localhost',
        database: 'db_historia_clinica',
        password: 'postgres',
        port: 5432,
      }
       
    public app: Application;

    constructor(){
    this.app=express();
    this.config();
    this.routes();
    this.connectionDb();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
    }

    routes():void{

    }
    star():void{
        this.app.listen(this.app.get('port'));
        console.log('servido iniciado y escuchabdo en puerto'+this.app.get('port'));
    }

    connectionDb(){
        console.log('entra a conection base de datos');
        const client = new Client(this.connectionData)    
        client.connect()
        client.query('SELECT * FROM config.ecne_enterprises')
            .then((response: { rows: any; }) => {
                console.log(response.rows)
                client.end()
            })
            .catch((err: any) => {
                client.end()
            })
        
    }
}

const ser=new Server();
ser.star();