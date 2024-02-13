1. **Generar Dígito Verificador:**
    - El usuario ingresará un número y la aplicación retornará el número junto con su dígito verificador correspondiente.
    - Los pares número-dígito verificador se almacenarán en una lista.
    
          **numero-verificador:**  **201012341-3**
    
2. **Verificar Existencia en la Lista:**
    - El usuario ingresará un número junto con su dígito verificador, y la aplicación verificará si este par existe en la lista de números generados previamente.
3. **Mostrar Listado de Números y Dígitos Verificadores:**
    - La aplicación proporcionará la opción de mostrar un listado completo de los números generados junto con sus dígitos verificadores asociados.
    - Se incluirá la funcionalidad de ocultar y mostrar este listado para una experiencia más intuitiva.

//////////////////////////////////////////////////////////////////////
⚙ Para calcular el dígito verificador, se deben realizar los siguiente pasos:

1. Obtener el rol sin guión ni dígito verificador.
2. Invertir el número. (e.g: de 201012341 a 143210102).
3. Multiplicar los dígitos por la secuencia 2, 3, 4, 5, 6, 7, si es que se acaban los números, se debe comenzar denuevo, por ejemplo, con 143210102:

      ***1×2+4×3+3×4+2×5+1×6+0×7+1×2+0×3+2×4=52***

1. Al resultado obtenido, es decir, 52, debemos sacarle el módulo 11, es decir:
    
    ***52 % 11 = 8***
    
2. Con el resultado obtenido en el paso anterior, debemos restarlo de 11:
    
    ***11 − 8 = 3***
    
3. Finalmente, el dígito verificador será el obtenido en la resta: 201012341-3.


<script src="calculos.js" type="module"></script>
    <script>
        // Importamos las funciones desde el archivo calculos.js
        import { calcularDV, calcularDigitoVerificador } from './calculos.js';

        // Agregamos un event listener al botón para ejecutar la función calcularDV al hacer clic
        document.getElementById('calcularDVButton').addEventListener('click', function() {
            // Ejecutamos la función calcularDV
            calcularDV();

            // Obtenemos el número de identificación desde el input
            let numeroIdentificacion = document.getElementById('numeroIdentificacion').value;

            // Si hay un número de identificación ingresado
            if (numeroIdentificacion) {
                // Calculamos el dígito verificador
                let digitoVerificador = calcularDigitoVerificador(numeroIdentificacion);
                
                // Mostramos el resultado en el elemento con id "resultado"
                document.getElementById('resultado').textContent = 'Dígito Verificador: ' + digitoVerificador;
            } else {
                // Si no hay un número de identificación ingresado, mostramos un mensaje de error
                document.getElementById('resultado').textContent = 'Por favor ingresa un número de identificación válido.';
            }
        });
    </script>