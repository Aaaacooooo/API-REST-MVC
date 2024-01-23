let Bicicleta = require("../../models/Bicicleta");


/* Maneja solicitudes de lista de bicicletas, obteniendo los datos del modelo Bicicleta y respondiendo
con un arreglo de bicicletas en formato JSON con un código de estado 200*/
exports.bicicleta_list = function (req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
};