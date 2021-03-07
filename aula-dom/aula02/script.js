var fsList = document.querySelectorAll(".multiple-field");

for (var i = 0; i < fsList.length; i++) {
  initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs) {
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";

  //seta o type button para as caixas do newInput aparecerem
  //por que o evento click sem o type por padrão faz um submit
  addButton.type = "button";
  fs.appendChild(addButton);

  //busca o seletor input
  var firstInput = fs.querySelector("input");

  addButton.addEventListener("click", function () {
    //para criar uma linha em cada input
    var div = document.createElement("div");
    var newInput = document.createElement("input");

    //add o mesmos atributos do primeiro input
    newInput.name = firstInput.name;
    newInput.type = firstInput.type;

    //criar o botão de excluir
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";

    //faz um div ao evento do newInput
    div.appendChild(newInput);
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      //apenas remove, + fácil
      div.remove();

      //outra alternativa removechild
      //fs.removeChild(div);
    });

    //recebe o elemento que irá ser add e um outro usado como referência
    //no caso o button
    fs.insertBefore(div, addButton);
  });
}
