  function faseUm() {

    while (true) {
  
      var respostaUm = prompt("1 - Cinco; 2 - Oito; 3 - Tres.");
  
      if (respostaUm == 1 || respostaUm == 2 || respostaUm == 3) {
        if (respostaUm == 1) {
          alert ("Muito bem. A primeira já foi.");
          window.location.href= "./fase2bastet.html";
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
  