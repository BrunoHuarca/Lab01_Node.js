function showEmpresa(id) {
    // Ocultar todos los rubros
    var empresas = document.getElementsByClassName("empresa");
    for (var i = 0; i < empresas.length; i++) {
      empresas[i].style.display = "none";
    }
    // Mostrar el rubro seleccionado
    document.getElementById("empresa" + id).style.display = "block";
  }