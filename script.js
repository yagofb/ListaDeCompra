function actualizarMensaje(texto) {
    document.getElementById("mensaje").textContent = texto;
  }
  
  function agregarElemento() {
    var texto = document.getElementById("nuevoElemento").value;
    if (texto !== "") {
      var nuevo = document.createElement("li");
      nuevo.textContent = texto;
      document.getElementById("lista").appendChild(nuevo);
      actualizarMensaje("Se añadió: " + texto);
      document.getElementById("nuevoElemento").value = "";
    }
  }
  
  function eliminarPrimero() {
    var lista = document.getElementById("lista");
    if (lista.firstChild) {
      var eliminado = lista.firstChild.textContent;
      lista.removeChild(lista.firstChild);
      actualizarMensaje("Se eliminó el primer elemento: " + eliminado);
    }
  }
  
  function borrarPorPosicion() {
    var posicion = parseInt(document.getElementById("posicion").value);
    var lista = document.getElementById("lista");
    if (!isNaN(posicion) && posicion >= 0 && posicion < lista.children.length) {
      var eliminado = lista.children[posicion].textContent;
      lista.removeChild(lista.children[posicion]);
      actualizarMensaje("Se eliminó el elemento en la posición " + posicion + ": " + eliminado);
    } else {
      actualizarMensaje("Posición inválida.");
    }
  }
  