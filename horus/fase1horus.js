
function faseUm () {

  var respostaUm = prompt("1 - Pelos; 2 - Luz; 3 - Buraco.");
  
  if (respostaUm == 3) {
    alert ("Muito bem. A primeira já foi.");
    window.location.href= "./fase2horus.html";
  } else if (respostaUm == 1 || respostaUm == 2) {
    window.location.href = "./../../gameover.html";
  } else {
    alert("Opção Inválida");
    faseUm();
  }
  }