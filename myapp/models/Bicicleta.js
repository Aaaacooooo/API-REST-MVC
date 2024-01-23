
//Constructor for the model with attributes
let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

//Array called allBicis that will contain objects of type Bicycles
Bicicleta.allBicis = [];

//Method to add a bicycle to the end of the array
Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;