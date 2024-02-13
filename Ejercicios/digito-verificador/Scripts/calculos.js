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

    //verificar que el digito sea mayor a 9
    if (digitoV <9){
        digitoV = 0;
    }

    //retornar el numero con el digito verificador 
    return numSin + '-' + digitoV;
}

//funcion para mostrar el dígito verificador 
function mostrarDV(){
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

export{calcularDigito, mostrarDV};


