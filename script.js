function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
  }
  
  function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }

  function borrarUltimoDigito(){
    const valorPantalla = document.getElementById('pantalla').value;
    let array = [...valorPantalla];
    array.pop();
    let cadena = array.join('');
    document.getElementById('pantalla').value = cadena;

  }
  