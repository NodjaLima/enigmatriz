
  function faseDois() {

    while (true) {
  
      var respostaUm = prompt("1 - O amor; 2 - Uma herança; 3 - O amanhã.");
  
      if (respostaUm == 1 || respostaUm == 2 || respostaUm == 3) {
        if (respostaUm == 3) {
          alert ("Você conseguiu vencer a segunda fase. Parabens! A próxima fase será ainda mais difícil.");
          window.location.href= "./fase3anubis.html";
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
  