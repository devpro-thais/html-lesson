//carregamento sequencial
function solution1() {
  let employeesPromise = fetch("http://localhost:3000/employees");
  employeesPromise.then((resp1) => {
    resp1.json().then((employees) => {
      let rolesPromise = fetch("http://localhost:3000/roles");
      rolesPromise.then((resp2) => {
        resp2.json().then((roles) => {
          let table = renderTable(employees, roles);
          document.getElementById("app").innerHTML = table;
        });
      });
    });
  });
}
//solution1();

//carregamento sequencial e refatoração da solution1
function solution2() {
  fetch("http://localhost:3000/employees")
    .then((resp1) => {
      return resp1.json();
    })
    .then((employees) => {
      fetch("http://localhost:3000/roles")
        .then((resp2) => {
          return resp2.json();
        })
        .then((roles) => {
          let table = renderTable(employees, roles);
          document.getElementById("app").innerHTML = table;
        });
    });
}
//solution2();

//carregamento sequencial e refatoração da solution2
function fetchJson(url) {
  return fetch(url).then((r) => {
    return r.json();
  });
}
function solution3() {
  fetchJson("http://localhost:3000/employees").then((employees) => {
    fetchJson("http://localhost:3000/roles").then((roles) => {
      let table = renderTable(employees, roles);
      document.getElementById("app").innerHTML = table;
    });
  });
}
//solution3();

//carregamento paralelo da promise
function solution4() {
  //recebe um array, onde cada item do array é uma promise
  //que vai retornar uma outra promise que só irá ser completada quando todas as promise do array foram finalizadas
  //retornado o resultado de todas elas combinadas
  Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ]).then(([employees, roles]) => {
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  });
}
solution4();

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}
