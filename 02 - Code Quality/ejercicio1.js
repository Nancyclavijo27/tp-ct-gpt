/**
 * Calcula el resultado aplicando operaciones en función de la paridad de los elementos del array.
 * @param {number[]} arr - El array de números de entrada.
 * @returns {number} - El resultado de aplicar las operaciones según la paridad de los elementos.
 */
function complicatedLevelOne(arr) {
   let result = 0;
 
   // Sumar los elementos del array y aplicar operaciones según la paridad del elemento actual.
   for (const num of arr) {
     result += num;
     if (num % 2 === 0) {
       result *= num;
     } else {
       result -= num;
     }
   }
 
   return result;
 }
 
 // Prueba de la función.
 console.log(complicatedLevelOne([3, 5, 2, 6, 3, 5]));
 