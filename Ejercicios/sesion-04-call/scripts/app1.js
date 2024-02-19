// Función que toma dos números y un callback para realizar una operación
function realizarOperacion(num1, num2, operacion) {
    console.log(`Operación: ${num1} y ${num2}`);
    // Llama al callback pasándole los dos números como argumentos
    operacion(num1, num2);
}

// Callback que suma dos números
function sumar(a, b) {
    console.log(`Suma: ${a + b}`);
}

// Callback que multiplica dos números
function multiplicar(a, b) {
    console.log(`Multiplicación: ${a * b}`);
}

// Uso de la función con los callbacks 
realizarOperacion(5, 3, sumar);
realizarOperacion(5, 3, multiplicar); 