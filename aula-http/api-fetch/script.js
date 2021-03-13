//FECTH chamada assíncrona, que encapsula uma chamada futura - promise
//armazenada na variável employeesPromise
let employeesPromise = fetch("http://localhost:3000/employees");

//para carregar a promise employeesPromise
//resp é o objeto que vai representar a resposta http
employeesPromise.then((resp) => {
  //.json() converte o corpo da resposta em objeto json que também 
  //é uma promise que precisa ser chamada, employees=callback de array
  //que vai ser retornado
  resp.json().then((employees) => {
    //variável table recebe a função da criação da tabela, com o 
    //param
    let table = renderTable(employees);
    //busca a div com id app e inseri os elementos na var table
    //innerHTML é uma forma mais prática de gerar via propriedade HTML
    //PORÉM traz como um risco grande de incorrer ao risco de 
    //vulnerabilidade HTML INJECTION -- não é indicado
    document.getElementById("app").innerHTML = table;
  });
});

//função que recebe so dados carregados, a lista de employees 
//vai gerar uma tabela que recebe como param o obj employee
function renderTable(employees) {
  //var rows vai receber o array 
  //uso do map para buscar todo array, com param employee para 
  //representar 1 de todos
  let rows = employees.map((employee) => {
    //retorna gerando uma linha, usando o template string
    //lê o campo das colunas que queremos pra tabela
    return `<tr><td>${employee.id}</td><td>${employee.name}</td></tr>`;
  });
  //retorna a table
  //função de array (.join()) que junta todos os elementos de um
  //array strings em um ÚNICA string, "" funciona como um separador
  //no join precisa especificar um separador, se não ela inseri ","
  return `<table>${rows.join("")}</table>`;
}