  function faseTres() {

    while (true) {
  
      var respostaUm = prompt("1 - Sombra; 2 - Árvore; 3 - Famílias.");
  
      if (respostaUm == 1 || respostaUm == 2 || respostaUm == 3) {
        if (respostaUm == 1) {
          alert ("Você foi simplesmente genial. As esfinges não tiveram chance. Anubis está muito grato.");
          window.location.href= "../vitoria.html";
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
  