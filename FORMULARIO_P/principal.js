   //Funcion para validar el nombre, acepta caracteres alfabeticos como maxima longitud de 45 caracteres, class list se usa para proporciona acceso a los nombres de clases del elemento como una lista
   
   function validarNombre() {
    var Input = document.getElementById("name");
    var x = /^[A-Za-z\s]{1,45}$/;
  
    if (!x.test(Input.value)) {
      
      Input.value = ""; 
      Input.focus(); 
      Input.classList.add("error");
      Input.classList.remove("success");

      return false;
    }
  
    Input.classList.remove("error");
    Input.classList.add("success");

    alert("Nombre válido");
    return true;
  }





//Funcion para validar el correo electronico, .value es es una propiedad que se utiliza para obtener o establecer el valor de un elemento de formulario y .trim() es un método de las cadenas de texto en JavaScript. Se utiliza para eliminar los espacios en blanco al inicio y al final de una cadena.
//Set time out  se utiliza para programar la ejecución de una función después de un cierto período de tiempo. Permite establecer un temporizador que ejecutará el código después de un retardo específico
// . test Se utiliza para buscar una coincidencia entre una expresión regular y una cadena de texto
  function vcor() {
    var emailInput = document.getElementById("email");
    var validarcorr = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (emailInput.value.trim() === "") {
      alert('Por favor, ingresa un correo electrónico.');
      setTimeout(function() {
        emailInput.focus();
      }, 0);  
      emailInput.classList.add("error-input");
      emailInput.classList.remove("success-input");
      return false;
    }

    if (validarcorr.test(emailInput.value)) {
      alert('Datos validos, felicitaciones');
      emailInput.classList.remove("error-input");
      emailInput.classList.add("success-input");
      
    } else {
        alert('Correo electrónico inválido');
        setTimeout(function() {
          emailInput.focus();
        }, 0);
      emailInput.classList.add("error-input");
      emailInput.classList.remove("success-input");
      return false;
    }

    return true;
  }




  
//Funcion para validar la contraseña
  function validarContrasena() {
    var contrasenaInput = document.getElementById("password");
    var contrasena = contrasenaInput.value;
  
    if (contrasena.trim() === "") {
      alert('Por favor, ingresa una contraseña.');
      setTimeout(function() {
        contrasenaInput.focus();
      }, 0);  
      contrasenaInput.classList.add("error-input");
      return false;
    }
  
    if (contrasena.length > 20) {
      alert('La contraseña no es correcta, debe tener como máximo 20 caracteres.');
      setTimeout(function() {
        contrasenaInput.focus();
      }, 0);    
      contrasenaInput.classList.add("error-input");
      return false;
    }
  
    alert('Contraseña correcta.');
    contrasenaInput.classList.remove("error-input");
    contrasenaInput.classList.add("success-input");
    return true;
  }