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
        })
        .catch(showError);
    })
    .catch(showError);
}
//solution2();

function fetchJson(url) {
  return fetch(url).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error(r.statusText);
    }
  });
}

function solution3() {
  fetchJson("http://localhost:3000/employees")
    .then((employees) => {
      fetchJson("http://localhost:3000/roles")
        .then((roles) => {
          let table = renderTable(employees, roles);
          document.getElementById("app").innerHTML = table;
        })
        .catch(showError);
    })
    .catch(showError);
}
//solution3();

//usando async/await na solution3();
async function solution5() {
  try {
    let employees = await fetchJson("http://localhost:3000/employees");
    let roles = await fetchJson("http://localhost:3000/roles");
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  } catch (erro) {
    showError(erro);
  }
}
//solution5();

function solution4() {
  Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ])
    .then(([employees, roles]) => {
      let table = renderTable(employees, roles);
      document.getElementById("app").innerHTML = table;
    })
    .catch(showError)
    .finally(() => {
      console.log("carregou");
    });
}
//solution4();

//usando async/await na solution4();
async function solution6() {
  try {
    let [employees, roles] = await Promise.all([
      fetchJson("http://localhost:3000/employees"),
      fetchJson("http://localhost:3000/roles"),
    ]);
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  } catch (erro) {
    showError(erro);
    //finally sempre é executado
  } finally {
    console.log("carregou");
  }
}
//solution6();

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}

function showError(error) {
  document.getElementById("app").innerHTML = "Erro ao carregar dados.";
  console.log(error);
}
