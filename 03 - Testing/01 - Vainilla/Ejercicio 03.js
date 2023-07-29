//Los tests de esta function ya están creados, debes crear la function a partir de ellos utilizando a ChatGPT.

/**
 * Función para buscar una palabra en un texto y devolver las posiciones de inicio y fin de las ocurrencias encontradas.
 * @param {string} texto - El texto en el que se realizará la búsqueda.
 * @param {string} palabra - La palabra que se busca en el texto.
 * @returns {Array} - Un array con las posiciones de inicio y fin de las ocurrencias de la palabra en el texto.
 */
function buscarPalabra(texto, palabra) {
   // Verificar si el texto y la palabra son cadenas de texto válidas
   if (typeof texto !== 'string' || typeof palabra !== 'string') {
     return [];
   }
 
   // Convertir la palabra y el texto a minúsculas para que la búsqueda sea insensible a mayúsculas y minúsculas
   const textoEnMinusculas = texto.toLowerCase();
   const palabraEnMinusculas = palabra.toLowerCase();
 
   const resultado = [];
   let index = 0;
 
   // Recorrer el texto para buscar todas las ocurrencias de la palabra
   while (index !== -1) {
     index = textoEnMinusculas.indexOf(palabraEnMinusculas, index);
 
     // Si se encuentra una ocurrencia, se añaden las posiciones de inicio y fin al resultado
     if (index !== -1) {
       resultado.push([index, index + palabra.length - 1]);
       index++;
     }
   }
 
   return resultado;
 }
 
 module.exports = buscarPalabra;
 