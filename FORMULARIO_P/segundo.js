
//Funcion para validar el genero, checked se utiliza en elementos de formulario del tipo "checkbox" o "radio" para verificar si están seleccionados o marcados.
function validarGenero() {
    var generoInputs = document.getElementsByName("gen");
    var generoSeleccionado = false;
  
    for (var i = 0; i < generoInputs.length; i++) {
      if (generoInputs[i].checked) {
        generoSeleccionado = true;
        break;
      }
    }
  
    if (!generoSeleccionado) {
      alert("Por favor, elige tu género.");
      return false;
    }
  
    return true;
  }





//Funcion para validar la fecha de regreso

  function validarFechar() {
    var fechaIn = document.getElementById("fechar");
    if (fechaIn.value.trim() === "") {
      alert("Por favor, selecciona tu fecha de regreso.");
      fechaIn.focus();
      return false;
    }
    return true;
  }





//Esta es la funcion principal donde se alojan las demas funciones, si es diferente a lo que le estoy solicitando, me devolvera false y tendra que hacer lo que dice la funcion, pero si es igual sera true y aparecera de manera correcta
  
  function validarFecha() {
    
    var generoValido = validarGenero();
    
  
    if (!generoValido) {
      return false;
    }
    var fechaInput = document.getElementById("fechai");
  
    if (fechaInput.value === "") {
      alert("Por favor, selecciona tu fecha de ida.");
      fechaInput.focus();
      return false;
    }

    var fechaRegreso = validarFechar();
    if (!fechaRegreso) {
      return false;
    }


  
    var direccionValida = validarDireccionResidencia();
    if (!direccionValida) {
    return false;
  }


  var edadValida = validarEdad();
  if (!edadValida) {
  return false;
}


var telValida = validarTel();
  if (!telValida) {
  return false;
}



var pesValida = validarPes();
  if (!pesValida) {
  return false;
}


var selValida = validarSeleccion();
if (!selValida) {
  return false;
}

    return true;
}





//Funcion para validar la direccion

  function validarDireccionResidencia() {
    var direccionInput = document.getElementById('dir');
    var direccion = direccionInput.value.trim();
  
    if (!direccion || direccion === '') {
      alert('Por favor, ingresa una dirección.');
      setTimeout(function() {
        direccionInput.focus();
      }, 0);  
      direccionInput.classList.add("error-input");
      return false;
    }
  
    if (direccion.length > 30) {
      alert('La dirección no es correcta, debe tener máximo 30 caracteres.');
      setTimeout(function() {
      direccionInput.focus();
      }, 0);    
      direccionInput.classList.add("error-input");
      return false;
    }
  
    alert('Dirección correcta.');
    direccionInput.classList.remove("error-input");
    direccionInput.classList.add("success-input");
    return true;
  }





  //Funcion para validar la edad, || significa or(o)

  function validarEdad() {
    var edadInput = document.getElementById('eda');
    var edad = edadInput.value.trim();
  
    if (!edad || edad === '') {
      alert('Por favor, ingresa una edad.');
      setTimeout(function() {
        edadInput.focus();
      }, 0);  
      edadInput.classList.add("error-input");
      return false;
    }
  
    if (edad.length > 2) {
      alert('La edad no es correcta, debe tener máximo 2 caracteres.');
      setTimeout(function() {
      edadInput.focus();
      }, 0);    
      edadInput.classList.add("error-input");
      return false;
    }
  
    alert('Edad correcta.');
    edadInput.classList.remove("error-input");
    edadInput.classList.add("success-input");
    return true;
  }





  //Funcion para validar el Telefono
  
  function validarTel() {
    var telInput = document.getElementById('tel');
    var tel = telInput.value.trim();
  
    if (!tel || tel === '') {
      alert('Por favor, ingresa un teléfono.');
      setTimeout(function() {
        telInput.focus();
      }, 0);  
      telInput.classList.add("error-input");
      return false;
    }
  
    if (tel.length > 10) {
      alert('El teléfono no es correcto, debe tener máximo 10 caracteres.');
      setTimeout(function() {
      telInput.focus();
      }, 0);    
      telInput.classList.add("error-input");
      return false;
    }
  
    alert('Teléfono correcto.');
    telInput.classList.remove("error-input");
    telInput.classList.add("success-input");
    return true;
  }
  
  



//Funcion para validar el peso

  function validarPes() {
    var pesInput = document.getElementById('pes');
    var pes = pesInput.value.trim();
  
    if (!pes || pes === '') {
      alert('Por favor, ingresa tu peso de equipaje.');
      setTimeout(function() {
        pesInput.focus();
      }, 0);  
      pesInput.classList.add("error-input");
      return false;
    }
  
    if (pes.length > 3) {
      alert('El peso no es correcto, debe tener máximo 3 caracteres.');
      setTimeout(function() {
      pesInput.focus();
      }, 0);    
      pesInput.classList.add("error-input");
      return false;
    }
  
    alert('Peso de equipaje correcto.');
    pesInput.classList.remove("error-input");
    pesInput.classList.add("success-input");
    return true;
  }
  




//Funcion para validar la lista desplegable

  function validarSeleccion() {
    var selectCiudad = document.getElementById('ciudad');
    
  
    if (selectCiudad.value.trim() === "") {
      alert('Por favor, seleccione una opción.');
      setTimeout(function() {
        selectCiudad.focus();
      }, 0);  
      return false;
    }
  
    // La opción seleccionada es válida
    alert('Opción seleccionada correctamente, felicitaciones. ' );
    return true;
  }
  
  
  