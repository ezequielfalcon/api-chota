import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
import cors from "cors";

// Creación del objeto `express`. Es una librería que sirve para armar APIs
const api = express();
// El cors es una librería que agrega unas validaciones que hacen falta para algunos navegadores
api.use(cors({ origin: true }));
// El body parser permite que todo lo que llega a la api se interprete como objeto automáticamente
api.use(bodyParser.json());

// Esto es un ejemplo de un GET en la ruta raíz de la api
// el objeto `req` representa el request HTTP entrante y el res es el objeto que se va a devolver
api.get('/', (req: Request, res: Response) => {

    // el status 200 es un especie de OK, y en el .json se define el objeto que se va a enviar en la respuesta
    res.status(200).json({
        mensaje: 'API Correctoas'
    });
});

// acá se pone el puerto donde va a escuchar el servidor y se inicia el servidor. esto hace que el programa corra "para siempre"
// las rutas implementadas arriba se ejecutan cada vez que llegue un request que cumpla con lo definido (por ejemplo, un GET a /)
const PORT = 5000;
api.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`);
});