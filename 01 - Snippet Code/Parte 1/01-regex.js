// Este regex debe validar que una contraseña tenga:
//  - Al menos 8 caracteres
//  - Al menos 1 letra mayúscula y 1 minúscula
//  - Al menos 1 número
//  - Al menos 1 carácter especial

function validarContraseña(inputString) {
   
      // Expresión regular que cumple con los requisitos mencionados
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
      // Verificar si la cadena cumple con la expresión regular
      if (regex.test(inputString)) {
        return true;
      } else {
        return false;
      }
    }
    
   const miCadena = "MiCadena123$";
if (validarContraseña(miCadena)) {
  console.log("La cadena cumple con los requisitos.");
} else {
  console.log("La cadena NO cumple con los requisitos.");
}


module.exports = validarContraseña;
