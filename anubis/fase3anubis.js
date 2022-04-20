function faseTres () {

  var respostaTres = prompt("1 - 9 pessoas; 2 - 7 pessoas; 3 - 11 pessoas.");
  
  if (respostaTres == 1) {
    alert ("Você foi simplesmente genial. As esfinges não tiveram chance. Annubis está muito grato.");
    window.location.href= "../../vitoria.html";
  } else if (respostaTres == 3 || respostaTres == 2) {
    window.location.href= "../gameover.html";
  } else {
    alert("Opção Inválida");
    faseTres();
  }
  }