function validarContraseña(inputString: string): boolean {
    // Expresión regular que cumple con los requisitos mencionados
    const regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    // Verificar si la cadena cumple con la expresión regular
    return regex.test(inputString);
  }
  
  const miCadena: string = "MiCadena123$";
  if (validarContraseña(miCadena)) {
    console.log("La cadena cumple con los requisitos.");
  } else {
    console.log("La cadena NO cumple con los requisitos.");
  }
  
  export default validarContraseña;
  
