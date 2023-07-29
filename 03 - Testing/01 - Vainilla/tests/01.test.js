const esPalindromo = require('../Ejercicio 01');

describe('01 - JavaScript', () => {
   // Aquí van tus tests
// Test 1: La función debe devolver true si el string ingresado es un palíndromo.
test('Verificar si la función devuelve true para un palíndromo', () => {
  expect(esPalindromo('Anita lava la tina')).toBe(true);
});

// Test 2: La función debe devolver false si el string ingresado no es un palíndromo.
test('Verificar si la función devuelve false para un no palíndromo', () => {
  expect(esPalindromo('Anita lava la tina.')).toBe(false);
});

// Test 3: Si el string ingresado está vacío debe devolver true.
test('Verificar si la función devuelve true para un string vacío', () => {
  expect(esPalindromo('')).toBe(true);
});

// Test 4: Si el string es palíndromo, aunque esté escrito todo con mayúsculas, debe devolver true.
test('Verificar si la función devuelve true para un palíndromo en mayúsculas', () => {
  expect(esPalindromo('ANITA LAVA LA TINA')).toBe(true);
});

// Test 5: Si el valor ingresado a la función no es de tipo string, debe devolver un error que diga "'Se esperaba una cadena de texto como argumento'".
test('Verificar si la función arroja un error para un valor no string', () => {
  expect(() => esPalindromo(123)).toThrowError('Se esperaba una cadena de texto como argumento');
});

});
