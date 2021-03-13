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

//usando async/await na solution3();
async function solution5() {
  let employees = await fetchJson("http://localhost:3000/employees");
  let roles = await fetchJson("http://localhost:3000/roles");
  let table = renderTable(employees, roles);
  document.getElementById("app").innerHTML = table;
}
//solution5();

function solution4() {
  Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ]).then(([employees, roles]) => {
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  });
}
//solution4();

//usando async/await na solution4();
async function solution6() {
  let [employees, roles] = await Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ]);
  let table = renderTable(employees, roles);
  document.getElementById("app").innerHTML = table;
}
solution6();

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}
