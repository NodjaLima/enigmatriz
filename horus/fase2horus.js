  function faseDois() {

    while (true) {
  
      var respostaUm = prompt("1 - 31 anos; 2 - 16 anos; 3 - 23 anos.");
  
      if (respostaUm == 1 || respostaUm == 2 || respostaUm == 3) {
        if (respostaUm == 3) {
          alert ("Você conseguiu vencer a segunda fase. Parabens! A próxima fase será ainda mais difícil.");
          window.location.href= "./fase3horus.html";
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
  