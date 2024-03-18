// Opciones para el usuario y sus correspondientes valores/multiplicadores //
const preciosCaballos = {
    razas: {
        1: {nombre: "raza1", precioBase: 340 },
        2: {nombre: "raza2", precioBase: 370 },
        3: {nombre: "raza3", precioBase: 400 },
        4: {nombre: "raza4", precioBase: 440 },
        5: {nombre: "raza5", precioBase: 480 },
        6: {nombre: "raza6", precioBase: 510 },
        7: {nombre: "raza7", precioBase: 550 },
        8: {nombre: "raza8", precioBase: 590 },
        9: {nombre: "raza9", precioBase: 630 }
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
costoCaballos = [];

// Funciones //
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

function calcularPrecio(razaId, tierId, edadId) {
    const raza = preciosCaballos.razas[razaId];
    const tier = preciosCaballos.tiers[tierId];
    const edad = preciosCaballos.edades[edadId];
    const precioFinal = raza.precioBase * tier.multiplicador * edad.multiplicador;
    return precioFinal
}
// Fin Funciones //

// Ejecución //
for (cantidadCaballos = 0; cantidadCaballos < 4; cantidadCaballos++) {
const razaId = elegirRaza("Seleccione la raza de su caballo: \n1. Raza1 \n2. Raza2 \n3. Raza3 \n4. Raza4 \n5. Raza5 \n6. Raza6 \n7. Raza7 \n8. Raza8 \n9. Raza9 ")
const tierId = elegirTier("Seleccione el tier de su caballo: \n1. Mestizo \n2. Estandar \n3. Noble \n4. Campeón \n5. Purasangre")
const edadId = elegirEdad("Seleccione la edad de su caballo: \n1. Potrillo \n2. Jóven \n3. Adulto \n4. Viejo")
const precio = calcularPrecio(razaId, tierId, edadId).toFixed(2);
costoCaballos.push(precio);
console.log("El costo del caballo Nº" + (cantidadCaballos + 1) + " es de " + costoCaballos[cantidadCaballos] + " monedas de plata")
};
costoCaballos.sort ((a, b) => a - b)
console.log("El caballo más económico costó " + costoCaballos[0] + ", mientras que el más caro costó " + costoCaballos[3])


