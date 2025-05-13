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
