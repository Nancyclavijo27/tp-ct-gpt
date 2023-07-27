/**
 * Genera una cadena formateada a partir de un objeto con valores numéricos.
 * Si el valor es par, muestra la clave seguida de ' is even.'.
 * Si el valor es impar, muestra la clave repetida el número de veces del valor.
 * Luego, repite esta cadena tantas veces como sea la suma de los valores numéricos del objeto.
 * Finalmente, devuelve la cadena formateada en mayúsculas y al revés.
 *
 * @param {Object} obj - El objeto que contiene pares clave-valor.
 * @returns {string} - Cadena formateada en mayúsculas y al revés.
 */
function complicatedLevelThree(obj) {
   let result = '';
   const sum = Object.values(obj).reduce((acc, curr) => acc + curr, 0);

   for (const [key, value] of Object.entries(obj)) {
      if (value % 2 === 0) {
         result += `${key} is even. `;
      } else {
         result += `${key}, `.repeat(value);
      }
   }

   // Repetir la cadena result 'sum' veces
   const finalResult = result.repeat(sum);

   // Devolver la cadena en mayúsculas y al revés
   return finalResult.split('').reverse().join('').toUpperCase();
}

// Ejemplo de uso
const obj = {
   a: 2,
   b: 3,
   c: 4,
   d: 5,
};

console.log(complicatedLevelThree(obj));
