function faseDois () {

  var respostaDois = prompt("1 - O amor; 2 - Uma herança; 3 - O amanhã.");
  
  if (respostaDois == 3) {
    alert ("Você conseguiu vencer a segunda fase. Parabens! A próxima fase será ainda mais difícil.");
    window.location.href= "./fase3anubis.html";
  } else if (respostaDois == 1 || respostaDois == 2) {
    window.location.href= "../gameover.html";
  } else {
    alert("Opção Inválida");
    faseDois();
  }
  }