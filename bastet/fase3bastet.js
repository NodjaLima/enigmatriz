
  function faseTres() {

    while (true) {
  
      var respostaUm = prompt("1 - Quando você é um rato; 2 - Quando estiver embaixo da escada; 3 - A noite.");
  
      if (respostaUm == 1 || respostaUm == 2 || respostaUm == 3) {
        if (respostaUm == 1) {
          alert ("Você foi simplesmente genial. As esfinges não tiveram chance. Annubis está muito grato.");
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
  