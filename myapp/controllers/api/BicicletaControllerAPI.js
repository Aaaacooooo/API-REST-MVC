let Bicicleta = require("../../models/Bicicleta");

// ** GET **
/* Maneja solicitudes de lista de bicicletas, obteniendo los datos del modelo Bicicleta y respondiendo
con un arreglo de bicicletas en formato JSON con un código de estado 200*/
exports.bicicleta_list = function (req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
};

// ** POST ** bicicleta_create method 
// Define un controlador para la creación de bicicletas mediante una solicitud POST
exports.bicicleta_create = function(req, res) {
    // Crea una nueva instancia de la clase Bicicleta utilizando los datos de la solicitud (id, color, modelo)
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    
    // Asigna la ubicación de la bicicleta utilizando los datos de latitud y longitud de la solicitud
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    // Agrega la bicicleta recién creada al ARRAY de bicicletas
    Bicicleta.add(bici);

    // Responde con un código de estado 201 (Created) y un objeto JSON que contiene la bicicleta recién creada
    res.status(201).json({
        bicicleta: bici
    });
}

// ** DELETE **
exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
};

// ** PUT ** bicicleta_update method 
// Define un controlador para la actualización de bicicletas mediante una solicitud PUT
exports.bicicleta_update = function(req, res) {
    // Busca la bicicleta con el ID proporcionado en la solicitud
    let bici = Bicicleta.findById(req.body.id);

    // Si la bicicleta no se encuentra, responde con un código de estado 404 (Not Found)
    if (!bici) {
        res.status(404).json({
            error: 'Bicicleta not found'
        });
        return;
    }

    // Actualiza los atributos de la bicicleta con los datos proporcionados en la solicitud
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    // Responde con un código de estado 200 (OK) y un objeto JSON que contiene la bicicleta actualizada
    res.status(200).json({
        bicicleta: bici
    });
}
