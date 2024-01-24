// Importa el módulo 'express' para trabajar con el framework web
let express = require('express');

// Crea un enrutador utilizando el método Router de Express
let router = express.Router();

// Importa el controlador de la API de bicicletas desde el archivo correspondiente
let BicicletaControllerAPI = require("../../controllers/api/BicicletaControllerAPI");

// ** GET ** Configura una ruta para manejar solicitudes GET en la ruta principal ("/")
// Al recibir una solicitud GET en esta ruta, llama a la función bicicleta_list del controlador BicicletaControllerAPI
router.get("/", BicicletaControllerAPI.bicicleta_list);

// ** POST **
//Ruta POST queinvoca el método bicicleta_create del controlador BicicletaControllerAPI
router.post("/create", BicicletaControllerAPI.bicicleta_create);

// ** DELETE **
router.delete("/delete", BicicletaControllerAPI.bicicleta_delete);

// ** PUT ** Route for bicicleta_update method 
router.put("/update", BicicletaControllerAPI.bicicleta_update);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación
module.exports = router;
