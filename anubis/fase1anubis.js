function faseUm() {

  while (true) {

    var respostaUm = prompt("1 - 16 primos; 2 - 12 primos; 3 - 14 primos.");

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
