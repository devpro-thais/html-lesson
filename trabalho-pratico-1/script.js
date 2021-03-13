var valorInicial = document.getElementById("valorInicial");
var prazoAno = document.getElementById("prazoAno");
var jurosAno = document.getElementById("jurosAno");
var prazoMes = document.getElementById("prazoMes");
var jurosMes = document.getElementById("jurosMes");
var jurosAcum = document.getElementById("jurosAcumulado");
var tbody = document.getElementById("tbody");

var vlAmortizacao;
var saldoDevedor;
var jurosAcumulado = 0;

function calcular(){
  
}

var btnSimular = document.getElementById("btnSimular");
btnSimular.addEventListener("click", function buttonSimula() {
  prazoMes.value = prazoAno.value * 12;
  jurosMes.value = (1 + jurosAno.valueAsNumber) ** (1 / 12) - 1;
  vlAmortizacao = valorInicial.value / prazoMes.value;
  simulaFinanciamento();
  jurosAcum.value = jurosAcumulado.toFixed(2);
});

//função de simulação do financiamento
function simulaFinanciamento() {
  for (var i = 0; i < prazoMes.value; i++) {
    saldoDevedor = valorInicial.value - i * vlAmortizacao;
    var juros = saldoDevedor * jurosMes.valueAsNumber;
    totalJuros = vlAmortizacao + juros;
    jurosAcumulado += juros;
  }
}

var prestacao;
var amortizacao;
var juros;
var total;

function criarTabela() {
  var table = document.getElementById("table");
  var tbody = document.getElementById("tbody");

  for (var i = 1; i < 6; i++) {
    var tr = document.createElement("tr");
    for (var j = 1; j < 6; j++) {
      prestacao.value = i;
    }
  }
}
