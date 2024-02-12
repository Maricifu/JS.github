function calcularDigito(num){
    //obtener numero sin digito verificador
    let numSin= num.replace(/[^0-9]/g, '');

    //invertir el numero 
    let numInvert= numSin.split('').reverse().join('');

    //multiplicar los numeros
}