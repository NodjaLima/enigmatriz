
function faseUm () {

var respostaUm = prompt("1 - Flor rara; 2 - A letra M; 3 - O céu azul.");

if (respostaUm == 2) {
  alert ("Muito bem. A primeira já foi.");
  window.location.href= "./fase2anubis.html";
} else if (respostaUm == 1 || respostaUm == 3) {
  window.location.href = "../../gameover.html";
} else {
  alert("Opção Inválida");
  faseUm();
}
}