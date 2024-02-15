//lista para almacenar los pares numero-digito verificador
const listaNumeros= [];


/*Paso 1*/
//funcion para crear el dígito verificador
function calcularDigito(num){
    //obtener numero sin digito verificador
    const numSin= num.replace(/[^0-9]/g, '');

    //invertir el numero 
    const numInvert= numSin.split('').reverse().join('');

    //multiplicar los numeros en secuencia
    let suma=0;
    for (let i=0; i < numInvert.length; i++) {
        let multiplicador= [2,3,4,5,6,7][i%6];
        suma += parseInt(numInvert.charAt(i)) * multiplicador;
    }

    //calcular el modulo de 11
    const resta = suma % 11;

    //resta del resultado obtenido de 11
    const digitoV= 11-resta;

    //verificar que el digito sea mayor o igual a 10
    if (digitoV >=10){
        digitoV = 0;
    }

    //retornar el numero con el digito verificador 
    return `${numSin}-${digitoV}`;
}

//funcion para mostrar el dígito verificador 
export function mostrarDV(){
    const numeroId=document.getElementById('numeroId').value.trim();
    const resultado= document.getElementById('resultado')

    if (numeroId){
        let numConDV= calcularDigito(numeroId);
        resultado.textContent = `Dígito verificador: ${numConDV}`;
    }
    else{
        resultado.textContent= 'Por favor ingresa un número de identificación válido :c';
    }
}

/*Paso 2*/

//funcion para generar el digito verificador y agregarlo a la lista 
export function generarDigitoVerificador(num){
    const digitoV= calcularDigito(num);
    const numConDV= `${digitoV}`;
    listaNumeros.push(numConDV);
    return numConDV;
}

//funcion para verificar si un numero con identificador existe en la lista
export function verificarExistencia(numConDV){
    return listaNumeros.includes(numConDV);
}

/*Paso 3*/

//funcion para mostrar el listado de numeros y el digito verificador en una tabla
export function mostrarListado() {
    const listadoBody = document.getElementById('listadoBody');
    listadoBody.innerHTML = '';

    listaNumeros.forEach(numeroConDV => {
        const [num, digitoV] = numConDV.split('-');
        const row = `<tr><td>${num}</td><td>${digitoV}</td></tr>`;
        listadoBody.innerHTML += row;
    });
}

//función para ocultar o mostrar el listado de números
export function toggleListado() {
    const listado = document.getElementById('listado');
    listado.style.display = listado.style.display === 'none' ? 'block' : 'none';
}