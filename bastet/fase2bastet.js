  function faseDois() {

    while (true) {
  
      var respostaUm = prompt("1 - Coração; 2 - Fumaça; 3 - Miragem.");
  
      if (respostaUm == 1 || respostaUm == 2 || respostaUm == 3) {
        if (respostaUm == 2) {
          alert ("Você conseguiu vencer a segunda fase. Parabens! A próxima fase será ainda mais difícil.");
          window.location.href= "./fase3bastet.html";
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
  