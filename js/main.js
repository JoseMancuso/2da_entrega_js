// Opciones para el usuario y sus correspondientes valores/multiplicadores //
const preciosCaballos = {
    razas: {
        1: {nombre: "Mustang", precioBase: 340 },
        2: {nombre: "Anglonórdico", precioBase: 370 },
        3: {nombre: "Trotador Pavalónico", precioBase: 400 },
        4: {nombre: "Bretón Imperial", precioBase: 440 },
        5: {nombre: "Tronador Caeterrano", precioBase: 480 },
        6: {nombre: "Crinlarga Élfico", precioBase: 510 },
        7: {nombre: "Pasofino Naerita", precioBase: 550 },
        8: {nombre: "Dunés Asláhhbico", precioBase: 590 },
        9: {nombre: "Sulemitano Real", precioBase: 630 }
    },
    tiers: {
        1: {nombre: "Mestizo", multiplicador: 0.9},
        2: {nombre: "Estándar", multiplicador: 1},
        3: {nombre: "Noble", multiplicador: 1.2},
        4: {nombre: "Campeón", multiplicador: 1.4},
        5: {nombre: "Purasangre", multiplicador: 1.7}
    },
    edades: {
        1: {nombre: "Potrillo", multiplicador: 0.8},
        2: {nombre: "Jóven", multiplicador: 1.2},
        3: {nombre: "Adulto", multiplicador: 1.1},
        4: {nombre: "Viejo", multiplicador: 0.6}
    }
};

// Definiciones necesarias //
const noValid = "Opción no válida. Por favor, seleccione una opción correcta"
let sumaTotal = 0;
costoCaballos = [];

// Funciones //
    // Prompts para selección de opciones del usuario //
function elegirRaza(mensaje) {
    let input;
    do {
        input = parseInt(prompt(mensaje));
        if (isNaN(input)) {
            alert(noValid);
        }
        else if (input < 1 || input > 9) {
            alert(noValid)
        }
    } while (isNaN(input) || (input < 1 || input > 9));
    return input
} 

function elegirTier(mensaje) {
    let input;
    do {
        input = parseInt(prompt(mensaje));
        if (isNaN(input)) {
            alert(noValid);
        }
        else if (input < 1 || input > 5) {
            alert(noValid);
        }
    } while (isNaN(input) || (input < 1 || input > 5));
    return input
}

function elegirEdad(mensaje) {
    let input;
    do {
        input = parseInt(prompt(mensaje));
        if (isNaN(input)) {
            alert(noValid);
        }
        else if (input < 1 || input > 4) {
            alert(noValid);
        }
    } while (isNaN(input) || (input < 1 || input > 4));
    return input
}

    // Cálculo de precio según los valores y multiplicadores de las opciones elegidas //
function calcularPrecio(razaId, tierId, edadId) {
    const raza = preciosCaballos.razas[razaId];
    const tier = preciosCaballos.tiers[tierId];
    const edad = preciosCaballos.edades[edadId];
    const precioFinal = raza.precioBase * tier.multiplicador * edad.multiplicador;
    return precioFinal
}
// Fin Funciones //

// Ejecución //
alert("Bienvenido! Seleccione los 4 caballos que desea comprar para su carreta.")

    // Ciclo para seleccionar opciones, calcular valor de lo seleccionado, y pushear ese dato al array correspondiente //
for (cantidadCaballos = 0; cantidadCaballos < 4; cantidadCaballos++) {
const razaId = elegirRaza("Seleccione la raza de su caballo. Ingrese el número de la opción deseada: \n1. Mustang \n2. Anglonórdico \n3. Trotador Pavalónico \n4. Bretón Imperial \n5. Trotador Caeterrano \n6. Crinlarga Elfico \n7. Pasofino Naerita \n8. Dunés Asláhbico \n9. Sulemitano Real ");
const tierId = elegirTier("Seleccione el tier de su caballo. Ingrese el número de la opción deseada: : \n1. Mestizo \n2. Estandar \n3. Noble \n4. Campeón \n5. Purasangre");
const edadId = elegirEdad("Seleccione la edad de su caballo. Ingrese el número de la opción deseada: : \n1. Potrillo \n2. Jóven \n3. Adulto \n4. Viejo");
const precio = calcularPrecio(razaId, tierId, edadId).toFixed(2);
costoCaballos.push(precio);
console.log("El costo del caballo Nº" + (cantidadCaballos + 1) + " es de " + costoCaballos[cantidadCaballos] + " monedas de plata")
};

    // Ordenar de mas económico a más costos, y mostrar estos dos casos en consola //
costoCaballos.sort ((a, b) => a - b);
console.log("El caballo más económico costó " + costoCaballos[0] + ", mientras que el más caro costó " + costoCaballos[3]);

    // Sumar el costo de las 4 selecciones y mostrar el total en consola //
for (i = 0; i < costoCaballos.length; i++) {
    sumaTotal += parseFloat(costoCaballos[i]);
} 
console.log("El costo total de los 4 caballos es de " + ((sumaTotal).toFixed(2)));

