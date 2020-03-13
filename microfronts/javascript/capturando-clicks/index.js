
var acc = document.getElementsByClassName("caixa");

var i;

for (i = 0; i < acc.length; i++) {
  var ativa = function() {
    this.classList.toggle("azul");
  }
  acc[i].addEventListener("click", ativa)
}
