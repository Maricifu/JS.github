1. **Generar Dígito Verificador:**
    - El usuario ingresará un número y la aplicación retornará el número junto con su dígito verificador correspondiente.
    - Los pares número-dígito verificador se almacenarán en una lista.
    
          **numero-verificador:**  **201012341-3**
    
2. **Verificar Existencia en la Lista:**
    - El usuario ingresará un número junto con su dígito verificador, y la aplicación verificará si este par existe en la lista de números generados previamente.
3. **Mostrar Listado de Números y Dígitos Verificadores:**
    - La aplicación proporcionará la opción de mostrar un listado completo de los números generados junto con sus dígitos verificadores asociados.
    - Se incluirá la funcionalidad de ocultar y mostrar este listado para una experiencia más intuitiva.

  /////////////////////////// Link de la página //////////////////////////////
  http://127.0.0.1:5500/Ejercicios/digito-verificador/index.html 


//lista para almacenar los pares numero-digito verificador
let listaNumeros= [];


/*Paso 1*/
//funcion para crear el dígito verificador
function calcularDigito(num){
    //obtener numero sin digito verificador
    let numSin= num.replace(/[^0-9]/g, '');

    //invertir el numero 
    let numInvert= numSin.split('').reverse().join('');

    //multiplicar los numeros en secuencia
    let suma=0;
    for (let i=0; i < numInvert.length; i++) {
        let multiplicador= [2,3,4,5,6,7][i%6];
        suma += parseInt(numInvert.charAt(i)) * multiplicador;
    }

    //calcular el modulo de 11
    let resta = suma % 11;

    //resta del resultado obtenido de 11
    let digitoV= 11-resta;

    //verificar que el digito sea mayor o igual a 10
    if (digitoV >=10){
        digitoV = 0;
    }

    //retornar el numero con el digito verificador 
    return numSin + '-' + digitoV;
}

//funcion para mostrar el dígito verificador 
export function mostrarDV(){
    let numeroId=document.getElementById('numeroId').value;
    let resultado= document.getElementById('resultado')

    if (numeroId){
        let numConDV= calcularDigito(numeroId);
        resultado.textContent= 'Dígito verificador: ' + numConDV;
    }
    else{
        resultado.textContent= 'Por favor ingresa un número de identificación válido :c';
    }
}

/*Paso 2*/

//funcion para generar el digito verificador y agregarlo a la lista 
export function generarDigitoVerificador(num){
    const digitoV= calcularDigito(num);
    const numConDV='' + digitoV;
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