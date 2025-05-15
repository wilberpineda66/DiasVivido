// Función para autocompletar las barras "/" en la fecha
document.getElementById("fecha").addEventListener("input", function(e) {
  const input = e.target;
  const value = input.value.replace(/\D/g, ''); // Eliminar cualquier carácter que no sea número
  
  // Formateamos automáticamente a DD/MM/AAAA
  if (value.length > 0) {
    let formattedValue = "";
    
    // Añadimos la primera parte (día)
    if (value.length <= 2) {
      formattedValue = value;
    } else {
      formattedValue = value.substring(0, 2) + "/";
      
      // Añadimos la segunda parte (mes)
      if (value.length <= 4) {
        formattedValue += value.substring(2);
      } else {
        formattedValue += value.substring(2, 4) + "/";
        
        // Añadimos la tercera parte (año)
        formattedValue += value.substring(4, 8);
      }
    }
    
    // Actualizamos el valor del input
    input.value = formattedValue;
  }
});

// Función para calcular los días vividos
function calcularDias() {
  const inputFecha = document.getElementById("fecha").value.trim();
  const resultado = document.getElementById("resultado");

  if (!inputFecha) {
    resultado.textContent = "Por favor, ingresa una fecha.";
    return;
  }

  // Convertir formato dd/mm/aaaa a fecha JS
  const partes = inputFecha.split("/");
  if (partes.length !== 3) {
    resultado.textContent = "Formato inválido. Usa dd/mm/aaaa.";
    return;
  }

  const dia = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10) - 1; // En JS los meses van de 0 a 11
  const anio = parseInt(partes[2], 10);
  const fechaNacimiento = new Date(anio, mes, dia);
  const hoy = new Date();

  if (isNaN(fechaNacimiento.getTime())) {
    resultado.textContent = "Fecha inválida. Verifica los valores.";
    return;
  }

  if (fechaNacimiento > hoy) {
    resultado.textContent = "La fecha de nacimiento no puede estar en el futuro.";
    return;
  }

  const diferenciaTiempo = hoy - fechaNacimiento;
  const dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

  resultado.textContent = `Han pasado ${dias} días desde tu nacimiento.`;
}
