
let btn = document.querySelector("#btn-registrar");
btn.addEventListener("click", verificarFormulario);

let form = document.querySelector("#form-registro");



function verificarFormulario(e){
    campos = document.getElementsByClassName("campo");
    errores = document.getElementsByClassName("error");
    e.preventDefault();
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === "") {
            // El campo está vacío
            campos[i].classList.add("error-input");
            errores[i].classList.remove("oculto");

        } else {
            // El campo no está vacío
            campos[i].classList.remove("error-input");
            errores[i].classList.add("oculto")
        }
      }

      let contraseña1 = document.querySelector("#contraseña");
      let contraseña2 = document.querySelector("#repetir-contraseña")
      let contraseñaInvalida = document.querySelector("#contraseña-error");

      if(contraseña1.value!=contraseña2.value){
        contraseña1.classList.add("error-input");
        contraseña2.classList.add("error-input");
        contraseñaInvalida.classList.toggle("oculto");
        e.preventDefault();
        console.log("Las contraseñas no coinciden");

    } else {
        //Agregarle tiempo para hacer el submit
        if((contraseña1.value!=="")&&((contraseña2.value!==""))){
            e.preventDefault();
            contraseña1.classList.toggle("error-input");
            contraseña2.classList.toggle("error-input");
            contraseñaInvalida.classList.toggle("oculto");
            console.log("Verificado")
            if(campos[0].value.trim(),campos[1],campos[2]){
                contraseña1.classList.remove("error-input");
                contraseña2.classList.remove("error-input");
                contraseñaInvalida.classList.add("oculto");
                
                login();
            }

        }
    }
}

function login(){
    let registroExitoso = document.querySelector("#registro-loader");
    registroExitoso.classList.remove("registro-oculto");
    
    setTimeout(function(){
        window.location.href = "login.html"
    },5000)
}
