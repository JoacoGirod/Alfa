// Proyecto Smart Taller
// Modelacion en el sistema de los autos (3)             danios >> Tren Delantero, Frenos, Bugias, Ruedas, Vidrio Trasero (5)
var auto1 = {
    marca : "Volkswagen",
    modelo : "Gol",
    patente : "ABC123",
    danios : ["Tren delantero","Frenos","Bugias"]
}
var auto2 = {
    marca : "Subaru",
    modelo : "Impreza",
    patente : "ABD124",
    danios : ["Ruedas","Vidrio trasero","Bugias"]
}
var auto3 = {
    marca : "Ford",
    modelo : "Fiesta",
    patente : "ABE125",
    danios : ["Ruedas","Frenos","Bugias"]
}
// Modelacion en el sistema de los mecanicos (3)        reparaciones >> Tren Delantero, Frenos, Bugias, Ruedas, Vidrio Trasero, Tablero, Aire Acondicionado, 
//                                                                      Vidrio trasero, Pintura y Chapa, Cableado
var mecanico1 = {
    nombre : "Uriel",
    legajo : "1",
    reparaciones : ["Bugias", "Frenos", "Tablero"]
}

var mecanico2 = {
    nombre : "Gonzalo",
    legajo : "2",
    reparaciones : ["Tren delantero","Ruedas","Aire Acondicionado"]
}
var mecanico3 = {
    nombre : "Ignacio",
    legajo : "3",
    reparaciones : ["Vidrio trasero", "Pintura y Chapa", "Cableado"]
}


// Agrupo los individuales en arrays colectivos para su mas facil manipulacion


var autos = [auto1, auto2, auto3]
var mecanicos = [mecanico1, mecanico2, mecanico3]


// Funcion para listar los legajos de los mecanicos, podria haberlo hecho con una arrow function pero opte por la flexibilidad de el for


function listarLegajos (arrayDeMecanicos){
    let legajosCompleto = []
    for (var i = 0; i < arrayDeMecanicos.length; i++){
        let legajoIndividual = arrayDeMecanicos[i].legajo
        legajosCompleto.push(legajoIndividual)
    }
    
    return legajosCompleto
}


// Funcion para listar las patentes de los autos, elegi for por sobre arrow function por la misma razon que antes


function listarPatentes (arrayDeAutos){
    let patentesCompleto = []
    for (var i = 0; i < arrayDeAutos.length; i++){
        let patenteIndividual = arrayDeAutos[i].patente
        patentesCompleto.push(patenteIndividual)  
    }
    
    return patentesCompleto
}
// Ambas funciones retornan un array conteniendo ya sea legajos o patentes

