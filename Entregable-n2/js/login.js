
let btn = document.querySelector("#btn-iniciar");
btn.addEventListener("click", verificarFormulario);

let form = document.querySelector("form-login");


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
            errores[i].classList.add("oculto");
            form.submit();
        }
      }
}