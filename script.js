function agregarElemento() {
    var texto = document.getElementById("nuevoElemento").value;
    if (texto !== "") {
      var nuevo = document.createElement("li");
      nuevo.textContent = texto;
      document.getElementById("lista").appendChild(nuevo);
      document.getElementById("nuevoElemento").value = "";
    }
  }
  
  function eliminarPrimero() {
    var lista = document.getElementById("lista");
    if (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
  }
  