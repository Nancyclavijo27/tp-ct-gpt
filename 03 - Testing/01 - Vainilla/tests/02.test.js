const obtenerPosteo = require('../Ejercicio 02');

describe('02 - AsyncRequest', () => {
   // Aquí van tus tests
   
  
      // Prueba para verificar que la función obtiene el post correcto cuando se le pasa un parámetro válido
      test('Devuelve el post correspondiente cuando se le pasa un parámetro válido', async () => {
        const validPostID = 1; // Cambiamos el nombre de la variable para reflejar que es el ID de post
        const post = await obtenerPosteo(validPostID);
        expect(post).toBeDefined(); // Esperamos que el post no sea undefined
        expect(post).toHaveProperty('userId');
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
      });
    
      // Prueba para verificar que devuelve null cuando se le pasa un parámetro no válido
      test('Devuelve null cuando se le pasa un parámetro no válido', async () => {
        const invalidPostID = 'Lorem Ipsum';
        const post = await obtenerPosteo(invalidPostID);
        expect(post).toBeNull(); // Esperamos que post sea null
      });
    });
    


