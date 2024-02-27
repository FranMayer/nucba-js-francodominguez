//CONSIGNA 1

// function verificarParOImpar(numero) {
//     if (numero % 2 === 0) {
//         console.log(numero + " es un número par");
//     } else {
//         console.log(numero + " es numero impar");
//     }
// }

//USO
// verificarParOImpar(2)


//CONSIGNA 2 

// function verificarNumeroMayor(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1 + " es mayor que " + num2);
//     } else if (num2 > num1) {
//         console.log(num2 + " es mayor que " + num1);
//     } else {
//         console.log("Los números son iguales");
//     }
// }

//USO

// verificarNumeroMayor(25, 77)
// verificarNumeroMayor(35, 15)
// verificarNumeroMayor(12, 12)

//CONSIGNA 3 

// function esMultiploDeCinco(numero) {
//     if (numero % 5 == 0) {
//         console.log(numero + " es múltiplo de 5");
//     } else {
//         console.log(numero + " no es múltiplo de 5");
//     }
// }

// USO
// esMultiploDeCinco(10); 
// esMultiploDeCinco(7); 

//CONSIGNA 4

// function imprimirNumerosHasta(numero) {
//     for (let i = 0; i <= numero; i++) {
//         console.log(i);
//     }
// }

//USO

// imprimirNumerosHasta(45)

//CONSIGNA 5

// function imprimirPalabraCantidad(palabra, cantidad) {
//     for (let i = 0; i < cantidad; i++) {
//         console.log(palabra);
//     }
// }

//USO

// imprimirPalabraCantidad("Messi", 20);

//CONSIGNA 6

// function imprimirArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

//USO

// const miArray = [1, 2, 3, 5, 14, 25, 158];
// imprimirArray(miArray);

//CONSIGNA 7 

// function contarNumeroArray(array) {
//     let contador = 0;
//     for (let i = 0; i <= array.length; array++) {
//         if (i !== 4) {
//         contador++;
//         }
        
//     }
//     return contador  
// }

//USO

// const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const cantidadNumeros = contarNumeroArray(miArray);
// console.log("La cantidad de números en el array, excluyendo el de la quinta posición, es: " + cantidadNumeros);

//CONSIGNA 8

// function imprimirArrayMultiplicadoPorNumero(array, numero) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i] * numero);
//     }
// }

// USO
// const miArray = [1, 2, 3, 4, 5];
// const numeroMultiplicador = 2;
// imprimirArrayMultiplicadoPorNumero(miArray, numeroMultiplicador);