
let btn = document.querySelector("#btn-registrar");
btn.addEventListener("click", verificarFormulario);

let form = document.querySelector("form-registro");


function verificarFormulario(e){
    campos = document.getElementsByClassName("campo");
    errores = document.getElementsByClassName("error");
    e.preventDefault();
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === "") {
            // El campo está vacío
            campos[i].classList.add("error-input");
            errores[i].classList.remove("oculto");
            //console.log(campos[i].nextElementSibling)
            //campos[i].nextElementSibling.remove("oculto");
        } else {
            // El campo no está vacío
            campos[i].classList.remove("error-input");
            errores[i].classList.add("oculto")
        }
      }

      let contraseña1 = document.querySelector("#contraseña");
      let contraseña2 = document.querySelector("#repetir-contraseña")
      if(contraseña1.value!=contraseña2.value ){
        contraseña1.classList.add("error-input");
        contraseña2.classList.add("error-input");
        e.preventDefault();
        console.log("Las contraseñas no coinciden")
    } else {
        //Agregarle tiempo para hacer el submit
        if((contraseña1.value!="")&&((contraseña2.value!=""))){
            contraseña1.classList.remove("error-input");
            contraseña2.classList.remove("error-input");
            contraseña1.classList.add("verificado");
            contraseña2.classList.add("verificado");
            e.preventDefault();
            console.log("Verificado")
        } 
    }
}
