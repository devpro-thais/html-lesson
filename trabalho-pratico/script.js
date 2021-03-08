var valorInicial = document.getElementById("valorInicial");
var prazoAno = document.getElementById("prazoAno");
var jurosAno = document.getElementById("jurosAno");
var prazoMes = document.getElementById("prazoMes");
var jurosMes = document.getElementById("jurosMes");
var jurosAcum = document.getElementById("jurosAcumulado");
var amortizacao;
var saldoDevedor;
var totalJuros = 0;
var jurosAcumulado = 0;

var btnSimular = document.getElementById("btnSimular");
btnSimular.addEventListener("click", buttonSimula);

function buttonSimula() {
  prazoMes.value = prazoAno.value * 12;
  jurosMes.value = (1 + jurosAno.valueAsNumber) ** (1 / 12) - 1;
  amortizacao = valorInicial.value / prazoMes.value;
  simulaFinanciamento();
  jurosAcum.value = jurosAcumulado.toFixed(2);
}

function simulaFinanciamento() {
  for (var i = 0; i < prazoMes.value; i++) {
    saldoDevedor = valorInicial.value - i * amortizacao;
    var juros = saldoDevedor * jurosMes.valueAsNumber;
    totalJuros = amortizacao + juros;
    jurosAcumulado += juros;
  }
}

function prestacoes(){
  var tprestacoes = document.getElementById("tprestacoes");
  var qtdLinhas = 5;
  var linha = tprestacoes.insertRow(qtdLinhas);

  for(var i=0; i<5; i++) {
    for(var j=0; j<4; j++) {
        var cellPrestacao= linha.insertCell(i);
        var cellAmortizacao= linha.insertCell(i);
        var cellJuros= linha.insertCell(i);
        var cellTotal= linha.insertCell(i);
    }
  }
}
