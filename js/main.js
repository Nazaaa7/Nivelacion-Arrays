/**
 * Sistema de Gestión de Personas
 * Este programa permite registrar personas con sus datos (nombre, edad, nota)
 * y muestra los listados: original y ordenado por nota (mayor a menor)
 */

// Función principal del programa
function gestionPersonas() {
    const personas = [];
    let continuar = true;
    
    console.log("=== SISTEMA DE GESTIÓN DE PERSONAS ===");
    
    // Bucle principal para ingresar datos
    while (continuar) {
        console.log("\n1. Agregar persona");
        console.log("2. Mostrar listados");
        console.log("3. Finalizar");
        
        const opcion = prompt("Seleccione una opción (1-3): ");
        
        switch (opcion) {
            case "1":
                agregarPersona(personas);
                break;
            case "2":
                mostrarListados(personas);
                break;
            case "3":
                continuar = false;
                mostrarListados(personas);
                console.log("¡Programa finalizado!");
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    }
}

// Función para agregar una persona
function agregarPersona(personas) {
    console.log("\n--- Ingreso de datos ---");
    
    const nombre = prompt("Ingrese el nombre: ");
    
    let edad;
    do {
        edad = parseInt(prompt("Ingrese la edad: "));
        if (isNaN(edad) || edad < 0) {
            console.log("Por favor, ingrese una edad válida (número positivo).");
        }
    } while (isNaN(edad) || edad < 0);
    
    let nota;
    do {
        nota = parseFloat(prompt("Ingrese la nota (0-10): "));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Por favor, ingrese una nota válida (entre 0 y 10).");
        }
    } while (isNaN(nota) || nota < 0 || nota > 10);
    
    // Agregar la persona a la lista
    personas.push([nombre, edad, nota]);
    console.log("¡Persona agregada con éxito!");
}

// Función para mostrar los listados
function mostrarListados(personas) {
    if (personas.length === 0) {
        console.log("\nNo hay datos para mostrar.");
        return;
    }
    
    console.log("\n=== LISTADO ORIGINAL ===");
    console.log("Nombre\tEdad\tNota");
    console.log("------------------------");
    personas.forEach(persona => {
        console.log(`${persona[0]}\t${persona[1]}\t${persona[2]}`);
    });
    
    // Crear una copia para ordenar
    const personasOrdenadas = [...personas];
    
    // Ordenar por nota (de mayor a menor)
    personasOrdenadas.sort((a, b) => b[2] - a[2]);
    
    console.log("\n=== LISTADO ORDENADO POR NOTA (MAYOR A MENOR) ===");
    console.log("Nombre\tEdad\tNota");
    console.log("------------------------");
    personasOrdenadas.forEach(persona => {
        console.log(`${persona[0]}\t${persona[1]}\t${persona[2]}`);
    });
}

// Ejecutar el programa automáticamente al cargar la página
window.onload = function() {
    console.log("Programa de gestión de personas cargado.");
    console.log("Por favor, use la consola para interactuar con el programa.");
    gestionPersonas();
};