function alteraDisplay(variavel) {
  document.getElementById("visor").value += variavel;
}

function apagaDisplay() {
  document.getElementById("visor").value = "";
}

function resultadoDisplay() {
  const resultado = eval(document.getElementById("visor").value);
  document.getElementById("visor").value = resultado;
}
