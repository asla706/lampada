let c = 0
function interruptor() {
    let image = document.getElementById('interruptor');
    if (image.src.match("on")) {
      image.src = "./imagens/off.png";
      document.querySelector("body").style.backgroundColor= "black";
      c = 1
    }else{
      image.src = "./imagens/on.png";
      document.querySelector("body").style.backgroundColor= "white";
      c = 0
    }

  if (c == 0) {
    document.getElementById('lampada').src = "./imagens/ligado.png";
  }else if(c == 1) {
    document.getElementById("lampada").src = "./imagens/desligado.png";

  }
}