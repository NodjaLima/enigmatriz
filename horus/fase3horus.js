function faseTres () {

  var respostaTres = prompt("1 - Policial Civil; 2 - Policial Militar; 3 - Investigador.");
  
  if (respostaTres == 1) {
    alert ("Você foi simplesmente genial. As esfinges não tiveram chance. Horus está muito grato.");
    window.location.href= "./../../vitoria.html";
  } else if (respostaTres == 3 || respostaTres == 2) {
    window.location.href= "./../../gameover.html";
  } else {
    alert("Opção Inválida");
    faseTres();
  }
  }