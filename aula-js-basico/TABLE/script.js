//addrow
var prazoMes = 240;
var valorInvestido = 200000;
var vlAmortizacao = valorInvestido / prazoMes;
var jurosMes = ((1 + 0.08) ^ (1 / 12)) - 1;
var tbody = document.querySelector("tbody");

function simulaJuros() {
  
}

var newRow = function () {
  var row = document.createElement("tr");
  var codProduto = document.createElement("td");
  var produto = document.createElement("td");
  var preco = document.createElement("td");

  for (var i = 1; i < 6; i++) {
    saldoDevedor = valorInicial - i * vlAmortizacao;
    juros = saldoDevedor * jurosMes;
    totalJuros = vlAmortizacao + juros;
  }
};
