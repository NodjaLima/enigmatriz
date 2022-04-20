function faseDois () {

  var respostaDois = prompt("1 - Coração; 2 - Fumaça; 3 - Miragem.");
  
  if (respostaDois == 2) {
    alert ("Você conseguiu vencer a segunda fase. Parabens! A próxima fase será ainda mais difícil.");
    window.location.href= "./fase3bastet.html";
  } else if (respostaDois == 1 || respostaDois == 3) {
    window.location.href= "./../../gameover.html";
  } else {
    alert("Opção Inválida");
    faseDois();
  }
  }