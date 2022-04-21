  function faseUm() {

    while (true) {
  
      var respostaUm = prompt("1 - Pelos; 2 - Luz; 3 - Buraco.");
  
      if (respostaUm == 1 || respostaUm == 2 || respostaUm == 3) {
        if (respostaUm == 3) {
          alert ("Muito bem. A primeira já foi.");
          window.location.href= "./fase2horus.html";
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
  