// Este regex debe validar que el teléfono tenga:
// - Luego, dos dígitos numéricos.
// - A continuación, un guión (-).
// - Después, exactamente diez dígitos numéricos.

function validatePhone() {
   let tuRegex = /^\d{2}-\d{10}$/;
   return tuRegex.test(telefono);
}

 // Ejemplo de uso:
 const telefono1 = "12-1234567890";
 const telefono2 = "11-9876543210";
 
 console.log(validarTelefono(telefono1)); // true
 console.log(validarTelefono(telefono2)); // true
 

module.exports = validatePhone;
