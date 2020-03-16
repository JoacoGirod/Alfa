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


// Funcion que une a un auto y un mecanico y repara lo que uno tenga daniada y el otro pueda reparar
function repararAuto(auto,mecanico){


    let danios = auto.danios
    let reparaciones = mecanico.reparaciones
    let daniosQueSePuedenArreglar = []

// Aqui lo que ocurre es que itero dos veces, como danios y reparciones son arrays de 3 objetos, se itera un total de 9 veces, cuando en una de esas 9 iteraciones se alinean 
// los resultados de los danios del auto y las reparaciones del mecanico se activa el if que los agrupa el resultado comun en un array
    for (var i = 0; i < reparaciones.length; i++){
        for (var j = 0; j < danios.length; j++){
            if (reparaciones[i]===danios[j]){
                daniosQueSePuedenArreglar.push(reparaciones[i])  
            }
            
        }
        
    }
// Aca hice un destructuring porque cualquier uso de un ciclo hacia que pudiera sacar una pero no las dos reparaciones pendientes, excedi el numero de variables en el 
// destructuring tanto como en el filter ya que no afecta el resultado (no da error), tengo la limitacion de que no pueda ser introducido un auto que tenga mas 
// de 5 danios junto con un mecanico que no sepa arregalar ninguna de las 5. Siempre puedo aumentar mas este numero aunque de todas maneras falla en ser perfectamente generica.
// MENSAJE AL CORRECTOR : probe filter pero no podia filtrar al mismo tiempo todo sin dejar de ser generico, usando un ciclo podia sacar uno en cada iteracion pero no de forma
// acumulativa, despues de probar varios metodos de array e incluso usando .join algunos de strings me quede con el destructuring porque en ultima instancia podria hacer que el
// tamaño del array usado en el destructuring [alfa, beta, charlie, delta, epsilon] dependa del .length del array de danios y reparaciones comunes. Si bien no se como hacer eso
// suena logica que se pueda crear algun tipo de array aleatorio con tan solo poner su length.  
    console.log(daniosQueSePuedenArreglar)
    let [alfa, beta, charlie, delta, epsilon] = daniosQueSePuedenArreglar
        postReparaciones = danios.filter(function(danio){
            return danio != alfa && danio != beta && danio != charlie && danio != delta && danio != epsilon
        })
    
    auto.danios = postReparaciones

}


