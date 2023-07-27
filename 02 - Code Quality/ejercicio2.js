/**
 * Calcula el resultado de realizar una serie de operaciones en un array y devuelve el resultado.
 * Si el resultado es mayor a 1000, se realiza una operación adicional. Si no, se devuelve un mensaje con el resultado.
 * @param {number[]} array - El array de números de entrada.
 * @returns {string|number} - El resultado final o un mensaje con el resultado.
 */
function complicatedLevelTwo(array) {
   // Duplicar cada elemento del array, filtrar los que son divisibles por 3 y sumarlos.
   const result = array
     .map((x) => x * 2)
     .filter((x) => x % 3 === 0)
     .reduce((acc, curr) => acc + curr, 0);
 
   if (result > 1000) {
     // Si el resultado es mayor a 1000, aplicar una operación matemática.
     const temp = result - 45; // Se puede calcular directamente utilizando una fórmula matemática.
     return temp;
   } else {
     // Si el resultado es menor o igual a 1000, realizar una suma simple.
     const finalResult = result + 3 * (3 - 1); // Sumar el valor de "result" con 3*2 = 6.
     const str = 'The final result is: ' + finalResult;
     return str;
   }
 }
 
 const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log(complicatedLevelTwo(array));
 