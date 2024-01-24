
//Constructor for the model with attributes
let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;

    
}

// Method to remove a bicycle by ID
Bicicleta.removeById = function (id) {
    // Find the index of the bicycle with the specified ID in the array and remove it
    const index = Bicicleta.allBicis.findIndex(bici => bici.id === id);
    if (index !== -1) {
        Bicicleta.allBicis.splice(index, 1);
    }
}

Bicicleta.findById = function (id) {
    // Find and return the bicycle with the specified ID in the array
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id === id) {
            return Bicicleta.allBicis[i];
        }
    }
    return null; // Return null if the bicycle with the specified ID is not found
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