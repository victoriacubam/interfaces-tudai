let btn = document.querySelector("#btn-iniciar");
btn.addEventListener("click", verificarFormulario);

let btnGoogle = document.querySelector("#btn-google");
btnGoogle.addEventListener("click", iniciarSesion);

let btnFb = document.querySelector("#btn-fb");
btnFb.addEventListener("click", iniciarSesion);

let form = document.querySelector("form-login");


function verificarFormulario(e){
    campos = document.getElementsByClassName("campo");
    errores = document.getElementsByClassName("error");
    e.preventDefault();
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === "") {
            console.log("if");
            // El campo está vacío
            campos[i].classList.add("error-input");
            errores[i].classList.remove("oculto");

        } else {
            console.log("else");
            // El campo no está vacío
            campos[i].classList.remove("error-input");
            errores[i].classList.add("oculto");
        }
    }
    if((campos[0].value.trim() !== "")&&(campos[1].value.trim() !== "")){
        iniciarSesion(e);
    }
}

function iniciarSesion(e){
    e.preventDefault();
    window.location.href = "index.html";
}


  
  
  