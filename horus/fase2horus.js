function faseDois () {

  var respostaDois = prompt("1 - Oculos; 2 - Luz; 3 - Janela.");
  
  if (respostaDois == 3) {
    alert ("Você conseguiu vencer a segunda fase. Parabens! A próxima fase será ainda mais difícil.");
    window.location.href= "./fase3horus.html";
  } else if (respostaDois == 1 || respostaDois == 2) {
    window.location.href= "../gameover.html";
  } else {
    alert("Opção Inválida");
    faseDois();
  }
  }