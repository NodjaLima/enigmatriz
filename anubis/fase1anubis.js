function faseUm() {

  while (true) {

    var respostaUm = prompt("1 - Flor rara; 2 - A letra M; 3 - O céu azul.");

    if (respostaUm == 1 || respostaUm == 2 || respostaUm == 3) {
      if (respostaUm == 2) {
        alert ("Muito bem. A primeira já foi.");
        window.location.href= "./fase2anubis.html";
        break
      } else {
        window.location.href = "../gameover.html";
        break
      }
    }
    else {
    alert("Opção Inválida");
    }
  }

}
