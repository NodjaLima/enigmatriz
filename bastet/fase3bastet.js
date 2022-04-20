function faseTres () {

  var respostaTres = prompt("1 - Quando você é um rato; 2 - Quando estiver embaixo da escada; 3 - A noite.");
  
  if (respostaTres == 1) {
    alert ("Você foi simplesmente genial. As esfinges não tiveram chance. Annubis está muito grato.");
    window.location.href= "./../../vitoria.html";
  } else if (respostaTres == 3 || respostaTres == 2) {
    window.location.href= "../gameover.html";
  } else {
    alert("Opção Inválida");
    faseTres();
  }
  }