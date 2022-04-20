function faseUm () {

  var respostaUm = prompt("1 - Espelho; 2 - Humanos; 3 - Flor de cactos.");
  
  if (respostaUm == 1) {
    alert ("Muito bem. A primeira já foi.");
    window.location.href= "./fase2bastet.html";
  } else if (respostaUm == 2 || respostaUm == 3) {
    window.location.href = "./../../gameover.html";
  } else {
    alert("Opção Inválida");
    faseUm();
  }
  }