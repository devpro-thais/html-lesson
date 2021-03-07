var caixa = document.getElementById("caixa");
var cx, cy;

function setPos(x, y) {
  //atinge todas as propriedades de estilo
  //caixa.style = "top: " + y + "px; left: " + x + "px";

  //+indicado por que vai direto do estilo a ser modificado
  caixa.style.top = y + "px";
  caixa.style.left = x + "px";
}

caixa.addEventListener("mousedown", iniciaArraste);
document.addEventListener("mouseup", terminaArraste);

function iniciaArraste(event) {
  cx = event.clientX - pxParaNum(caixa.style.left);
  cy = event.clientY - pxParaNum(caixa.style.top);
  //propriedade classList fornece funções que podemos chamar
  caixa.classList.add("arrastando");
  document.addEventListener("mousemove", arrasta);
}

function terminaArraste(event) {
  //propriedade classList fornece funções que podemos chamar
  caixa.classList.remove("arrastando");
  document.removeEventListener("mousemove", arrasta);
}

function arrasta(event) {
  var x = event.clientX;
  var y = event.clientY;
  setPos(x - cx, y - cy);
}

function pxParaNum(s) {
  //+converte meu replace para número
  return +s.replace("px", "");
}
