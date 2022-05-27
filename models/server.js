const express = require('express');
const cors = require('cors');


class Server {


    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares: funciones que van añadirle otra funcionalidad a nuestra web server.
        //Es como una función que siempre va ejecutarse cuando nosotros levantemos nuestro servidor.
        this.middlewares(); //Llamamos nuestro método de middlewares.

        //RUTAS DE MI APLICACIÓN
        this.routes();
    }

    middlewares(){

        //Cors
        this.app.use(cors());

        //Lectura y Parseo del body 
        this.app.use(express.json());


        //Directorio público
        this.app.use(express.static('public'));//Implementación de la carpeta pública.
    }

    routes (){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}


module.exports = Server;