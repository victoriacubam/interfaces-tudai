//Se toma del DOM el canvas 
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// canvas.addEventListener('click', function(event){
//     event.preventDefault();
// })

/**
 * CARGA DE IMAGENES PARA EJECUTAR EL JUEGO
 */
// Fondo de menu e inicio 
const backgroundImage = new Image();
backgroundImage.src = "css/imagenes/Juego/inicioJuego.png";
//backgroundImage.src = "css/imagenes/Juego/caratula.png";
// Boton para elegir cantidad de fichas 
const botonElegirJuego = new Image();
botonElegirJuego.src = "css/imagenes/Juego/boton-seleccionar-juego.png";
//Boton para iniciar el juego 
const botonIniciarJuego= new Image();
botonIniciarJuego.src= "css/imagenes/Juego/boton-inicio-juego.png";
//Fondo de juego
const background2 = new Image();
background2.src = "css/imagenes/Juego/fondoTablero.png";
//Fondo tablero
const fondoTablero = new Image();
fondoTablero.src = "css/imagenes/Juego/fondoBlanco.png";
//Ficha BugsBunny
const fichaBugsBunny = new Image();
fichaBugsBunny.src = "css/imagenes/Juego/bugsbunny.png";
//Ficha PatoLucas
const fichaPatoLucas = new Image();
fichaPatoLucas.src = "css/imagenes/Juego/patolucas.png";
//Ficha Tweety
const fichaTweety = new Image();
fichaTweety.src = "css/imagenes/Juego/tweety.png";
//Ficha Wolf 
const fichaWolf = new Image();
fichaWolf.src = "css/imagenes/Juego/wolf.png";
//Anuncio de ganador 
const letrero = new Image();
letrero.src = "css/imagenes/Juego/anuncia-ganador.png";

/**
 * MOSTRAR MENU DE INSTRUCCIONES , CANTIDAD DE FICHAS EN LINEA Y CON QUE FICHAS JUGAR 
 */
CargarImagenes();

function CargarImagenes() {    
    let contador = 0;
    // Variables para controlar los estados del listener del mouse.
    let listenerEnabled = true;
    let listenerEnabledSelector = false;
    let modoJuego = 0;
    // Función para mostrar las instrucciones y los botones en el canvas
    function mostrarInstrucciones() {
        contador++;
        if(contador==10){
            mostrarMenu();
        }
    }   
    function mostrarMenu() {
        listenerEnabledSelector = false;
        context.drawImage(backgroundImage, -15, 0, canvas.width+15, canvas.height);
        // Título e instrucciones
        context.font = "45px 'Playpen Sans'";
        context.fillStyle = "lightyellow";
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.textAlign = "center";
        let texto = "Preparate para la diversión!";
        //Posicion X e Y en el canvas 
        let x = canvas.width / 2;
        let y = 100;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y); 

        context.font = "20px 'Playpen Sans'";
        context.fillStyle = "lightyellow";
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.textAlign = "center";
        texto = "Selecciona la cantidad de fichas en línea:";
         y = 200;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);
        // Dibuja los botones con imágenes
        y = 300;//alinea los botones en la misma pos en Y 
        context.drawImage(botonElegirJuego, 200, y, 200, 50);
        context.drawImage(botonElegirJuego, 400, y, 200, 50);
        context.drawImage(botonElegirJuego, 600, y, 200, 50);
        texto = "4 en línea";
        y = 330;
        x = 300;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);
        texto = "5 en línea";
        x = 500;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);
        texto = "6 en línea";
        x = 700;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);


        y=240;
        // Event listeners para los botones
        let instrucciones = document.querySelector("#cantCeldas");
        canvas.addEventListener("click", function (event) {
            if(listenerEnabled){
                const clickX = event.clientX - canvas.getBoundingClientRect().left;
                const clickY = event.clientY - canvas.getBoundingClientRect().top;
                if (clickX >= 200 && clickX <= 400 && clickY >= y && clickY <= y+100) {
                    console.log("4 en línea "+y)
                    // Inicia juego de 4 en línea
                    modoJuego = 4;
                    mostrarSeleccionBandos(); 
                } else if (clickX >= 400 && clickX <= 600 && clickY >= y && clickY <= y+100) {
                    // Inicia juego de 5 en línea
                    modoJuego = 5;
                    mostrarSeleccionBandos(); 
                } else if (clickX >= 600 && clickX <= 800 && clickY >= y && clickY <= y+100) {
                    // Iniciar juego de 6 en línea
                    modoJuego = 6;
                    mostrarSeleccionBandos(); 
                }
                instrucciones.innerHTML = modoJuego;
            }
        });
    }

    
    let ficha1 = null;
    let ficha2 = null;
    bando1 = []; //Fichas de jugador 1 
    bando2 = []; //Fichas de jugador 2
    function mostrarSeleccionBandos() {
        listenerEnabled = false;
        listenerEnabledSelector = true;
        ficha1 = null;
        ficha2 = null;
        bando1 = [];
        bando2 = [];
        // Arreglo de bandos
        console.log("Cargando bandos");
        //Bando 1
        let y = 170;
        let size = 90;
        let radius = size/2;
        let color = `rgba(0,0,0,255)`;
        //Dibuja las opciones de ficha que tiene el jugador 1 
        let image = fichaBugsBunny;
        let f1 = new Ficha(200, y, radius, color, context, 1, image);
        bando1.push(f1);
        image = fichaPatoLucas;
        let f2 = new Ficha(400, y, radius, color, context, 1, image);
        bando1.push(f2);
        image = fichaTweety;
        let f3 = new Ficha(600, y, radius, color, context, 1, image);
        bando1.push(f3);
        image = fichaWolf;
        let f4 = new Ficha(800, y, radius, color, context, 1, image);
        bando1.push(f4);
        // Bando 2
        y = 350;
         //Dibuja las opciones de ficha que tiene el jugador 1 
        image = fichaBugsBunny;
        let f5 = new Ficha(200, y, radius, color, context, 1, image);
        bando2.push(f5);
        image = fichaPatoLucas;
        let f6 = new Ficha(400, y, radius, color, context, 1, image);
        bando2.push(f6);
        image = fichaTweety;
        let f7 = new Ficha(600, y, radius, color, context, 1, image);
        bando2.push(f7);
        image = fichaWolf;
        let f8 = new Ficha(800, y, radius, color, context, 1, image);
        bando2.push(f8);
        mostrarBandos();
    }
    function mostrarBandos() {
        clearCanvas();
        context.drawImage(backgroundImage, -15, 0, canvas.width+15, canvas.height);
        // Título e instrucciones
        context.font = "45px 'Playpen Sans'";
        context.fillStyle = "lightyellow";
        let x = canvas.width / 2;
        let y = 80;
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.textAlign = "center";
        let texto = "Selecciona tu personaje";
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y); 

        context.font = "25px 'Playpen Sans'";
        
        y = 170;
        
        
        texto = "VS";
        y = 270;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);

        
        texto = "Volver";
        x = 60;
        y = canvasHeight - (canvasHeight-30);
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);

        // Dibuja los botones con imágenes
        bando1.forEach(function (ficha) {
            
            ficha.draw();
        });
        bando2.forEach(function (ficha) {
            ficha.draw();
        });

        // Checkea si existe ficha1 y ficha2
        if(ficha1 != null && ficha2 != null){
            //Estilos para boton de iniciar el juego 
            context.drawImage(botonIniciarJuego, 400, 380, 200, 100);
            context.font = "20px 'Playpen Sans'";
            context.fillStyle = "lightyellow";
            context.strokeStyle = "black";
            texto = "Iniciar juego";
            x = canvasWidth/2;
            y = 460;
            context.strokeText(texto, x, y);
            context.fillText(texto, x, y);
        }
    }
    
    canvas.addEventListener("click", function (event) {
        if(listenerEnabledSelector){
            const clickX = event.clientX - canvas.getBoundingClientRect().left;
            const clickY = event.clientY - canvas.getBoundingClientRect().top;

            if (clickX <= 100 && clickY >= 200) {
                // Si el click ocurre en ese rango se vuelve al menu de elejir fichas
                 
                listenerEnabledSelector = false;
                listenerEnabled = true;
                mostrarMenu();
            }else if (clickX >= 300 && clickX <= 700 && clickY >= 400 && clickY <= 500) {
                if(ficha1 != null && ficha2 != null){
                    // Si el click ocurre en ese rango se inicia el juego  
                    listenerEnabledSelector = false;
                    iniciarJuego(modoJuego, ficha1.image, ficha2.image);
                }
            }else{
                for (let i = 0; i < bando1.length; i++) {
                    const ficha = bando1[i];
                    // Verifica si la ficha es dibujable y si se hizo clic en ella
                    if (ficha.draweable && Math.sqrt((ficha.posX - clickX) ** 2 + (ficha.posY - clickY) ** 2) <= ficha.radius) {
                        // Comprueba si hay una ficha del bando 2 seleccionada y su imagen coincide con la ficha actual
                        if(ficha2 != null && ficha.image == ficha2.image){
                            
                        }else{
                            // Itera sobre las demás fichas del bando 1 para desactivarlas y resaltar la ficha seleccionada.
                            for (let j = 0; j < bando1.length; j++) {
                                if (j != i) {
                                    bando1[j].fill = "rgba(0,0,0,255)";
                                    bando2[j].draweable = true;
                                }else{
                                    bando1[j].fill = "rgba(255,255,0,255)";
                                    ficha1 = bando1[j];
                                    bando2[j].draweable = false;
                                }      
                            }
                        }
                    }
                }
                for (let i = 0; i < bando2.length; i++) {
                    const ficha = bando2[i];
                    // Verifica si la ficha es dibujable y si se hizo clic en ella.
                    if (ficha.draweable && Math.sqrt((ficha.posX - clickX) ** 2 + (ficha.posY - clickY) ** 2) <= ficha.radius) {
                        // Comprueba si hay una ficha del bando 1 seleccionada y su imagen coincide con la ficha actual.
                        if (ficha1 != null && ficha.image == ficha1.image) {
                            
                            } else {
                            // Itera sobre las demás fichas del bando 2 para desactivarlas y resaltar la ficha seleccionada.
                                for (let j = 0; j < bando2.length; j++) {
                                    if (j != i) {
                                        bando2[j].fill = "rgba(0,0,0,255)";
                                        bando1[j].draweable = true;
                                    } else {
                                        // bando2[j].fill = "rgba(255,0,0,255)";
                                        ficha2 = bando2[j];
                                        bando1[j].draweable = false;
                                    }     
                                        }
                        }    
                    }
                }
                
                mostrarBandos();
                
            }
        }
    });

    //Función para cargar las imágenes del juego y mostrar las instrucciones 
    //cuando todas las imágenes estén cargadas.
 
    backgroundImage.onload = function () {
        mostrarInstrucciones();
    };
    botonElegirJuego.onload = function () {
        mostrarInstrucciones();
    };
    botonIniciarJuego.onload=function(){
        mostrarInstrucciones();
    };
    background2.onload = function () {
        mostrarInstrucciones();
    }
    fondoTablero.onload = function () {
        mostrarInstrucciones();
    }
    fichaBugsBunny.onload = function () {
        mostrarInstrucciones();
    }
    fichaPatoLucas.onload = function () {
        mostrarInstrucciones();
    }
    letrero.onload = function () {
        mostrarInstrucciones();
    }
    fichaTweety.onload = function () {
        mostrarInstrucciones();
    }
    fichaWolf.onload = function () {
        mostrarInstrucciones();
    }
}

//Borrar el contenido del canvas.
function clearCanvas() {
    context.globalCompositeOperation = "source-out";
    // Rellena el canvas con un rectángulo transparente para borrar el contenido anterior.
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.globalCompositeOperation = "source-over";
}

// Llama a la función para cargar las imágenes y mostrar las instrucciones 
//cuando todas las imágenes estén listas.
CargarImagenes();

// //temporizador
const tiempoInicial = 90/60;
let temporizador = document.querySelector("#temporizadorJuego");
let intervalo = null;

//temporizadorJuego();

// function temporizadorJuego(){
//     clearInterval(intervalo);
//     let tiempo = tiempoInicial * 60;
//     intervalo = setInterval(()=>{
//         let minutes = Math.floor(tiempo / 60);
//         let seconds = tiempo % 60;
//         if((seconds<10)){
//             temporizador.innerHTML = `0${minutes}:0${seconds}`;
//         } else {
//             temporizador.innerHTML = `0${minutes}:${seconds}`;
//         }
//         console.log(tiempo);
//         if(tiempo>0){
//             tiempo--;
//         } else {
//             clearInterval(intervalo);
//             //terminoJuego = true;
//             //Llamar a la funcion que dice el ganador o mostrar un mensaje
//             console.log("Se termino el juego");
//             mostrarMsj("Se termino el tiempo");
//         }
//     }, 1000);

// }






/**
 * LOGICA DE JUEGO DE CANTIDAD DE FICHAS EN LINEA 
*/

function iniciarJuego(cantEnLinea, imagen1, imagen2) {
    document.querySelector("#temporizadorJuego").classList.remove("ocultar");
    document.querySelector("#reiniciar").classList.remove("ocultar");
    temporizadorJuego();
    let fichasTotales = (cantEnLinea+2)*(cantEnLinea+3)
    let tamanioFicha = 100/cantEnLinea;
    let fichasJ1 = [];
    let fichasJ2 = [];
    let tablero = new Tablero(context, cantEnLinea, 'rgba(0, 0, 255, 1)', backgroundImage, tamanioFicha);
    let turnoJugador = 1; // Maneja cual es el jugador que le toca el turno, Inicia jugador 1 
    //Se crea la ficha que va a estar en juego 
    let fichaEnJuego =  new Ficha(getXInicialFicha(), getYInicialFicha(), tamanioFicha,`rgba(255,0,0,255)`, context, 2, imagen2);
    let terminoJuego = false;

   
    let temporizadorActivo = true; // Variable de control para el temporizador

    function temporizadorJuego() {
    clearInterval(intervalo);
    let tiempo = tiempoInicial * 60;
    intervalo = setInterval(() => {
        if (temporizadorActivo) {
            let minutes = Math.floor(tiempo / 60);
            let seconds = tiempo % 60;
            if (seconds < 10) {
                temporizador.innerHTML = `0${minutes}:0${seconds}`;
            } else {
                temporizador.innerHTML = `0${minutes}:${seconds}`;
            }
            if (tiempo > 0) {
                tiempo--;
            } else {
                clearInterval(intervalo);
                terminoJuego = true;
                // Llamar a la función que dice el ganador o mostrar un mensaje
                console.log("Se terminó el tiempo");
                mostrarMsj("Se terminó el tiempo");
                mostrarBtnReiniciar("Reiniciar");
                temporizadorActivo = false; // Desactivar el temporizador
            }
        } else {
            clearInterval(intervalo); // Detener el temporizador si la variable de control es falsa
        }
    }, 1000);
}
    
    
 

    function play() {
        if(!terminoJuego){
            if(definirGanador(1)){
                //Muestra mensaje ganador al final del juego
                setTimeout(function(){ mostrarMsj("El ganador es el Jugador 1"); }, 100);//Tarda 0.1 segundos en paraecer el mensaje 
                terminoJuego = true;
                temporizadorActivo=false; 
                
            }else if(definirGanador(2)){
                 //Muestra mensaje ganador al final del juego
                setTimeout(function(){ mostrarMsj("El ganador es el Jugador 2"); }, 100);//Tarda 0.1 segundos en paraecer el mensaje 
                terminoJuego = true;
                temporizadorActivo=false;
                
            }
            if(fichasJ1.length+fichasJ2.length>0){
                if(!terminoJuego){
                    if (turnoJugador == 2) {
                        //Se agrega ficha nueva al arreglo de juagador 2
                        addFicha(getXInicialFicha(), getYInicialFicha(), tamanioFicha,`rgba(240,80,190,1)`, 2, imagen2);
                        fichasJ1.pop();
                    } else {
                         //Se agrega ficha nueva al arreglo de juagador 1
                        addFicha(getXInicialFicha(), getYInicialFicha(), tamanioFicha,`rgba(215,175,50,1)`, 1, imagen1);
                        fichasJ2.pop();
                    }
                    // Recorre la parte superior del tablero, por donde entran las fichas
                    for (let i = 0; i < tablero.entradaFichas.length; i++) {
                        // si la entrada se puede dibujar 
                        tablero.entradaFichas[i].ficha = fichaEnJuego;
                    }
                    drawAll();
                }
            }else{
                setTimeout(function(){ mostrarMsj("EMPATE"); }, 100);//Tarda 0.1 segundos en paraecer el mensaje 
                terminoJuego = true;
            }
        }
        drawAll();
    }
    function getXInicialFicha(){
        if(turnoJugador == 1){
            return tamanioFicha+100; //Ubica la ficha que va a estar en juego en X
        }else{
            return canvasWidth-tamanioFicha-100;
        }
    }
    function getYInicialFicha(){
        if(turnoJugador == 1){
            return 100;
            //return canvasHeight-10-fichasJ2.length*11; //Ubica la ficha que va a estar en juego en Y
        }else{
            //return canvasHeight-10-fichasJ1.length*11;
            return 100; 
        }
    }
    
    //Logica para definir ganador dependiendo de la cantidad de fichas 
    function definirGanador(team){
        //Recorre las filas y columnas del tablero para ver si hay una pocicion ganadora  
        function verificaVertical(){
            for (let i = 0; i < tablero.filas-cantEnLinea+1; i++) {
                for(let j = 0; j < tablero.columnas; j++){
                    if(verificaVerticalFila(i, j, 1)){
                        return true;
                    }
                }
            }
            return false;
        }
        //Controla fichas de forma vertical recorriendo x colomnas 
        function verificaVerticalFila(fila, columna, cont){
            // Si la casilla actual está vacía no hay secuencia.
            if(tablero.casillas[fila][columna].getTeam() == null){
                return false;
            }else if(cont == cantEnLinea){
                // Si se alcanza el número requerido de fichas en línea verifica si pertenecen al mismo equipo.
                if(tablero.casillas[fila][columna].getTeam() == team){
                    tablero.casillas[fila][columna].setColorFicha(`rgba(0,255,0,255)`);
                    return true;
                }else{
                    // Si las fichas no pertenecen al mismo equipo, no hay secuencia ganadora.
                    return false;
                }
            }else{
                 // Si la casilla actual pertenece al mismo equipo, continuar verificando en la siguiente fila.
                if(tablero.casillas[fila][columna].getTeam() == team){
                    if(verificaVerticalFila(fila+1, columna, cont+1)){
                        tablero.casillas[fila][columna].setColorFicha(`rgba(0,255,0,255)`);
                    }
                     // Llamada recursiva para verificar la siguiente fila en la misma columna sin incrementar el contador.
                    return verificaVerticalFila(fila+1, columna, cont+1);
                }else{
                     // Si la casilla actual no pertenece al mismo equipo no hay secuencia .
                    return false;
                }
            }
        }
        function verificaHorizontal(){
            for (let i = 0; i < tablero.filas; i++) {
                for(let j = 0; j < tablero.columnas-cantEnLinea+1; j++){
                    if(verificaHorizontalFila(i, j, 1)){
                        return true;
                    }
                }
            }
            return false;
        }
        function verificaHorizontalFila(fila, columna, cont){
            // Si la casilla actual está vacía no hay secuencia 
            if(tablero.casillas[fila][columna].getTeam() == null){
                return false;
            }else if(cont == cantEnLinea){
                // Si se alcanza el número requerido de fichas en línea, verifica si pertenecen al mismo equipo.
                if(tablero.casillas[fila][columna].getTeam() == team){
                    tablero.casillas[fila][columna].setColorFicha(`rgba(0,255,0,255)`);
                    return true;
                }else{
                    // Si las fichas no pertenecen al mismo equipo, no hay secuencia ganadora.
                    return false;
                }
            }else{
                 // Si la casilla actual pertenece al mismo equipo, continuar verificando en la siguiente fila.
                if(tablero.casillas[fila][columna].getTeam() == team){
                    if(verificaHorizontalFila(fila, columna+1, cont+1)){
                        tablero.casillas[fila][columna].setColorFicha(`rgba(0,255,0,255)`);
                    }
                     // Llamada recursiva para verificar la siguiente fila en la misma columna sin incrementar el contador.
                    return verificaHorizontalFila(fila, columna+1, cont+1);
                }else{
                     // Si la casilla actual no pertenece al mismo equipo, no hay secuencia vertical.
                    return false;
                }
            }
        }
        function verificaDiagonal(){
            for (let i = 0; i < tablero.filas; i++) {
                for(let j = 0; j < tablero.columnas; j++){
                    // Verificar si hay una secuencia diagonal hacia la derecha abajo o derecha arriba.
                    if(verificaDiagonalDerechaAbajo(i, j, 1) || verificaDiagonalDerechaArriba(i, j, 1)){
                        return true;
                    }
                }
            }
            return false;
        }
        function verificaDiagonalDerechaAbajo(fila, columna, cont){
            // Verificar si la casilla actual está vacía.
            if(tablero.casillas[fila][columna].getTeam() == null){
                return false;
            }else if(cont == cantEnLinea){
                // Si se alcanza el número requerido de fichas en línea, verificar si pertenecen al mismo equipo.
                if(tablero.casillas[fila][columna].getTeam() == team){
                    tablero.casillas[fila][columna].setColorFicha(`rgba(0,255,0,255)`);
                    return true;
                }else{
                      // Si las fichas no pertenecen al mismo equipo, no hay secuencia ganadora.
                    return false;
                }
            }else{
                // Si la casilla actual pertenece al mismo equipo y hay espacio para seguir verificando 
                if(fila+1 < tablero.filas && columna+1 < tablero.columnas
                    && tablero.casillas[fila][columna].getTeam() == team){
                        if(verificaDiagonalDerechaAbajo(fila+1, columna+1, cont+1)){
                            tablero.casillas[fila][columna].setColorFicha(`rgba(0,255,0,255)`);
                        }
                        return verificaDiagonalDerechaAbajo(fila+1, columna+1, cont+1);
                }else{
                     // Si la casilla actual no pertenece al mismo equipo o no hay espacio para continuar no hay secuencia ganadora.
                    return false;
                }
            }
        }
        function verificaDiagonalDerechaArriba(fila, columna, cont){
            // Verificar si la casilla actual está vacía.
            if(tablero.casillas[fila][columna].getTeam() == null){
                return false;
            }else if(cont == cantEnLinea){
                // Si se alcanza el número requerido de fichas en línea, verificar si pertenecen al mismo equipo.
                if(tablero.casillas[fila][columna].getTeam() == team){
                    tablero.casillas[fila][columna].setColorFicha(`rgba(0,255,0,255)`);
                    return true;
                }else{
                      // Si las fichas no pertenecen al mismo equipo, no hay secuencia ganadora.
                    return false;
                }
            }else{
                // Si la casilla actual pertenece al mismo equipo y hay espacio para seguir verificando 
                if(fila-1 >= 0 && columna+1 < tablero.columnas
                    && tablero.casillas[fila][columna].getTeam() == team){
                        if(verificaDiagonalDerechaArriba(fila-1, columna+1, cont+1)){
                            tablero.casillas[fila][columna].setColorFicha(`rgba(0,255,0,255)`);
                        }
                    return verificaDiagonalDerechaArriba(fila-1, columna+1, cont+1);
                }else{
                     // Si la casilla actual no pertenece al mismo equipo o no hay espacio para continuar no hay secuencia ganadora.
                    return false;
                }
            }
        }
        if(verificaHorizontal() || verificaVertical() || verificaDiagonal()){
            return true;
        }else{
            return false;
        }
    }
    
    //Se crea una nueva intancia de ficha en juego, que es la que el jugador va a utilizar para jugar
    function addFicha(posX, posY, radius, color, team, image){
        let ficha = new Ficha(posX, posY, radius, color, context, team, image);
        fichaEnJuego = ficha;
    }
    
    //Dibujar todos los elementos del juego en el canvas 
    function drawAll(gCO = "source-over") {
        // Limpiar el lienzo para eliminar los dibujos anteriores
        clearCanvas();
         // Dibujar el tablero del juego.
        tablero.draw();
        // Permite que las fichas pasen por atras del tablero 
        context.globalCompositeOperation = gCO;
    
         // Dibujar la ficha en juego si existe.
        if(fichaEnJuego != null){
            fichaEnJuego.draw(); 
        }
       
         // Dibujar las fichas del jugador 1
        for (let i = 0; i < fichasJ1.length; i++) {
            fichasJ1[i].draw();
        }
         // Dibujar las fichas del jugador 2
        for (let i = 0; i < fichasJ2.length; i++) {
            fichasJ2[i].draw();
        }
        // Dibuja  la entrada del tablero(por donde entran las fichas)  y el fondo del juego.
        drawEntradaTablero();
        drawFondo();
        
    }

    //Dibuja el fondo del tablero con el mismo color del fondo de las celdas, para que no se vean espacios en blanco 
    function drawFondo(){
        context.globalCompositeOperation = "destination-over";
        context.drawImage(fondoTablero, ((canvasWidth-tablero.columnas*tamanioFicha*2.75)/2)-15, tablero.getSuperior(), tablero.columnas*tamanioFicha*2.75+30, tablero.filas*tamanioFicha*2.75);
        context.fillStyle = "rgba(0,0,0,0.2)";
        context.fillRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(background2, 0, 0, canvasWidth, canvasHeight);
        context.globalCompositeOperation = "source-over";
    }
    

    

    
    //Dibujar todas las fichas 
    function dibujarFichasJugadores() {
        // Crear y dibujar fichas para el jugador 1
        for (let i = 1; i <= (fichasTotales / 2); i++) {
            let minX = 50;
            let maxX = 200;
            let numeroAleatorioX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

            let minY = 300;
            let maxY = 450;
            let numeroAleatorioY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;


            let fichaPila = new Ficha(numeroAleatorioX,numeroAleatorioY, tamanioFicha, `rgba(255, 0, 0, 255)`, context, 1, imagen1);
            
            fichasJ1.push(fichaPila);

            console.log(fichasJ1);
        }
    
        // Crear y dibujar fichas para el jugador 2
        for (let i = 1; i <= (fichasTotales / 2); i++) {
            let minX = 950;
            let maxX = 800;
            let numeroAleatorioX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

            let minY = 300;
            let maxY = 450;
            let numeroAleatorioY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;


            let fichaPila2 = new Ficha(numeroAleatorioX,numeroAleatorioY, tamanioFicha, `rgba(255, 0, 0, 255)`, context, 2, imagen2);
            
            fichasJ2.push(fichaPila2);

            console.log(fichasJ2);
        }
    
        drawAll();
    }
   
    
    
    
    
    
   
    
    let mousePresionado = false;
    let animacion = false;
    
    //Agrega un evento de escucha para el evento de clic del mouse en el canvas.
    //Se activa cuando el mouse se presiona sobre el canvas.
    canvas.addEventListener("mousedown", function (event) {
        // Verifica si la animación no está en curso.
        if(!animacion){
        // Obtiene las coordenadas X y Y del clic del mouse en relación con el canvas.
        const clickX = event.clientX - canvas.getBoundingClientRect().left;
        const clickY = event.clientY - canvas.getBoundingClientRect().top;
        
         // Calcula la distancia entre el punto de clic y el centro de la ficha en juego.
        if (Math.sqrt((fichaEnJuego.posX - clickX) ** 2 + (fichaEnJuego.posY - clickY) ** 2) <= fichaEnJuego.radius && !terminoJuego) {
           // Indica que el mouse ha sido presionado.
            mousePresionado = true;
             // Verifica si la ficha en juego pertenece al jugador que tiene el turno actual.
            if (fichaEnJuego.team == turnoJugador) {
                // Redibuja todos los elementos del juego.
                drawAll();
            }
        }
        }
    });
    
    //Dibuja la ficha de entrada en el tablero si hay una ficha en juego y la entrada está disponible.
    function drawEntradaTablero(){
        if(fichaEnJuego){
           // Obtiene el índice de la entrada disponible en el tablero.
            let i = getEntrada();
            // Verifica si el índice de entrada es válido (mayor o igual a 0).
            if (i>=0) {
                tablero.entradaFichas[i].draw();
            }
        }
    }
    function getEntrada(){
        if(fichaEnJuego){
            // Verifica si la posición Y de la ficha en juego está por encima del límite superior del tablero.
            if(fichaEnJuego.posY < tablero.getSuperior()){
                // Busca a través de las entradas en el tablero para encontrar una entrada disponible.
                for (let i = 0; i < tablero.entradaFichas.length; i++) {
                    // Verifica si la posición X de la ficha en juego está dentro del rango de la entrada actual.
                    if (tablero.entradaFichas[i].getPosX() < fichaEnJuego.posX 
                    && tablero.entradaFichas[i].getPosX()+tamanioFicha*2.75 > fichaEnJuego.posX) {
                          // Si la posición X de la ficha está dentro del rango, devuelve el índice de la entrada.
                        return i;
                    }
                }
            }
        }
    }
    
    //Agrega un evento de escucha para el evento de movimiento del mouse en el canvas
    //Se activa cuando el mouse se mueve sobre el canvas
    canvas.addEventListener("mousemove", function (event) {
         // Verifica si el mouse está presionado y no hay animación en curso.
        if (mousePresionado && !animacion) {
            // Actualiza las coordenadas X y Y de la ficha en juego basándose en la posición del mouse en el canvas
            fichaEnJuego.posX = event.clientX - canvas.getBoundingClientRect().left;
            fichaEnJuego.posY = event.clientY - canvas.getBoundingClientRect().top;
            // Redibuja todos los elementos del juego para mostrar la ficha en su nueva posición.
            drawAll();
        }
    });
    
    //Agrega un evento de escucha para cuando se deja de presionar el botón del mouse en el canvas
    //Se activa cuando el botón del mouse deja de estar presionado 
    canvas.addEventListener("mouseup", function () {
        // Verifica si el mouse estaba presionado y no hay animación en curso.
        if (mousePresionado && !animacion)  {
             // Verifica si hay una entrada disponible en el tablero y si es dibujable
            if(getEntrada()>=0
            && tablero.entradaFichas[getEntrada()].drawable){
                // Si hay una entrada disponible y es dibujable
                // inicia la animación de la ficha cayendo en el tablero
                animateFichaFall(); 
            }else{
                // Si no hay una entrada disponible o no es dibujable
                // inicia la animación de retorno de la ficha.
                animateRetorno();
            }
            mousePresionado = false;
        }
    });

    //Inicia una animación para devolver la ficha en juego a su posición inicial    
    function animateRetorno() {
        // Obtiene las coordenadas X e Y de la posición inicial de la ficha en juego
        const targetX = getXInicialFicha();
        const targetY = getYInicialFicha()-fichaEnJuego.radius;
        const gravedad = 0.4; // Determina la velocidad de la animación.
        let index = 0;// Controla el progreso de la animación.
        
        function animate() {
            // Redibuja todos los elementos del juego para mostrar la ficha en su nueva posición.
            drawAll();
            // Verifica si se alcanzó el  límite para detener la animación.
            if (index == 100) {
                // Establece la posición final de la ficha y detiene la animación
                fichaEnJuego.posX = targetX;
                fichaEnJuego.posY = targetY;
                drawAll();
                animacion = false;
            } else {
                // Interpone suavemente la posición de la ficha para crear un efecto de movimiento.
                fichaEnJuego.posX += (targetX-fichaEnJuego.posX) * gravedad;
                fichaEnJuego.posY += (targetY-fichaEnJuego.posY) * gravedad;
                index++;
                // Solicita la siguiente animación.
                requestAnimationFrame(animate);
            }
        }
         // Inicia la animación y marca que hay una animación en curso
        animacion = true;
        animate();
    }

    //Inicia una animación para que la ficha en juego caiga en la entrada del tablero seleccionada
    function animateFichaFall() {
        // Obtiene la entrada del tablero apuntada y la fila disponible para la ficha.
        const entradaApuntada = getEntrada();
        const fDisponible = filaDisponible(entradaApuntada); // Fila disponible para la ficha
        // Calcula la posición de destino en el eje Y (centro del canvas) para la ficha
        const targetY = tablero.getSuperior()+tamanioFicha*(2.75/2)+(tamanioFicha*2.75)*fDisponible; // Posición de destino (por ejemplo, el centro del canvas)
        // Establece la posición inicial de la ficha en el eje X
        fichaEnJuego.posX = tablero.getLateral()+tamanioFicha*(2.75/2)+(tamanioFicha*2.75)*entradaApuntada;
        const gravedad = 1.15; // Velocidad de la caida de la ficha 
        let index =-5 ;
        let rebote =0;//número de rebotes de la ficha antes de llegar a la posición de destino.

        function animate() {
            // Redibuja todos los elementos del juego para mostrar la ficha en su nueva posición.
            drawAll("destination-over");

            // Verifica si la ficha aún no ha llegado a la posición de destino
            if (fichaEnJuego.posY <= targetY && rebote<1) {
                // Calcula la nueva posición Y de la ficha con efecto de rebote.
                if(fichaEnJuego.posY+(index*gravedad)>targetY){
                    fichaEnJuego.posY = targetY;
                }else{
                    fichaEnJuego.posY += index*gravedad;
                }
                // Actualiza el índice y solicita la siguiente animación.
                index++;
                requestAnimationFrame(animate);
                // Controla el rebote de la ficha cuando llega a la posición de destino.
                if(fichaEnJuego.posY==targetY){
                    index = index*(-0.4);
                    rebote++;
                }
            }else{
                // La ficha ha llegado a su destino
                animacion = false;
                // Coloca la ficha en la casilla del tablero correspondiente.
                tablero.casillas[fDisponible][entradaApuntada].setFicha(fichaEnJuego);
                // Cambia el turno al siguiente jugador y comienza su turno.
                turnoJugador = turnoJugador === 1 ? 2 : 1;
                play(); 
            }
        }
        // Inicia la animación y marca que hay una animación en curso.
        animacion = true;
        animate();
        context.globalCompositeOperation = "source-over";
    }
    
   
    //Determina la fila disponible en una columna específica del tablero donde se puede colocar una ficha.
    function filaDisponible(columna){
        // Inicializa la fila en la parte inferior del tablero.
        let fila = tablero.filas-1;
        
        // Itera desde la parte inferior hacia arriba de la columna para encontrar la fila disponible.
        for (let i = tablero.filas-1; i >= 0; i--) {
            const c = tablero.casillas[i][columna];
            // Verifica si la casilla en la fila actual y columna especificada está vacía.
            if(c.ficha == null){
                // Si la casilla está vacía, marca la entrada correspondiente como no dibujable si es la fila superior.
                if(fila == 0){
                    tablero.entradaFichas[columna].drawable = false;
                }
                // Devuelve la fila disponible.
                return fila;
            }else{
                // Si la casilla no está vacía, pasa a la fila superior.
                fila--;
            }
        }
        return -1;
    }

    // Mostrar mensaje de victoria en el canvas 
    function mostrarMsj(mensaje) {
        // Tamaño y posición del rectángulo
        const rectanguloWidth = canvas.width * 0.5;
        const rectanguloHeight = canvas.height * 0.3;
        
        
        // Dibujar el Letrero
        context.drawImage(letrero, 220, 105, rectanguloWidth, rectanguloHeight);
        
        // Dibujar el texto del mensaje
        context.font = "20px 'Playpen Sans'";
        context.textAlign = "center";
        context.fillStyle= 'white'
        
        let x = canvas.width / 2;
        let y = 200;
        context.strokeText(mensaje, x, y);
        context.fillText(mensaje, x, y);
    }
    tablero.draw();
    console.log("Tablero Listo ");
    dibujarFichasJugadores();
    console.log("Fichas dibujadas");
    play();
    console.log("Inicia Juego");

    document.querySelector("#reiniciar").addEventListener('click', function(){
        console.log("Se reinicia juego");
        temporizadorActivo=false;
        console.log("Se detiene el tiempo");
        mostrarMenu();
        document.querySelector("#temporizadorJuego").classList.add("ocultar");
        document.querySelector("#reiniciar").classList.add("ocultar");
    });

    function mostrarBtnReiniciar(texto) {
        listenerEnabledSelector = false;
        context.drawImage(botonElegirJuego, 400, 215, 200, 50);
        
        context.font = "20px 'Playpen Sans'";
        context.fillStyle = "lightyellow";
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.textAlign = "center";
        x = 500;
        y = 250;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);
        
        // Event listener del boton 
        canvas.addEventListener("click", function (event) {
            listenerEnabledSelector = true;
            if (listenerEnabledSelector) {
                const clickX = event.clientX - canvas.getBoundingClientRect().left;
                const clickY = event.clientY - canvas.getBoundingClientRect().top;
    
                if (clickX >= 350 && clickX <= 600 && clickY >= 115 && clickY <= 415) {
                    // Si el click ocurre en ese rango se vuelve al menu de elegir fichas 
                    listenerEnabledSelector = false;
                    listenerEnabled = true;
                    mostrarMenu();
                    console.log("Clickeado");
                    
                }
            }
        });
    }
    function mostrarMenu() {
        listenerEnabledSelector = false;
        context.drawImage(backgroundImage, -15, 0, canvas.width+15, canvas.height);
        // Título e instrucciones
        context.font = "45px 'Playpen Sans'";
        context.fillStyle = "lightyellow";
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.textAlign = "center";
        let texto = "Preparate para la diversión!";
        //Posicion X e Y en el canvas 
        let x = canvas.width / 2;
        let y = 100;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y); 

        context.font = "20px 'Playpen Sans'";
        context.fillStyle = "lightyellow";
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.textAlign = "center";
        texto = "Selecciona la cantidad de fichas en línea:";
         y = 200;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);
        // Dibuja los botones con imágenes
        y = 300;//alinea los botones en la misma pos en Y 
        context.drawImage(botonElegirJuego, 200, y, 200, 50);
        context.drawImage(botonElegirJuego, 400, y, 200, 50);
        context.drawImage(botonElegirJuego, 600, y, 200, 50);
        texto = "4 en línea";
        y = 330;
        x = 300;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);
        texto = "5 en línea";
        x = 500;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);
        texto = "6 en línea";
        x = 700;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);


        y=240;
        let listenerEnabled= true; 
        // Event listeners para los botones
        let instrucciones = document.querySelector("#cantCeldas");
        canvas.addEventListener("click", function (event) {
            if(listenerEnabled){
                const clickX = event.clientX - canvas.getBoundingClientRect().left;
                const clickY = event.clientY - canvas.getBoundingClientRect().top;
                if (clickX >= 200 && clickX <= 400 && clickY >= y && clickY <= y+100) {
                    console.log("4 en línea "+y)
                    // Inicia juego de 4 en línea
                    modoJuego = 4;
                    mostrarSeleccionBandos(); 
                } else if (clickX >= 400 && clickX <= 600 && clickY >= y && clickY <= y+100) {
                    // Inicia juego de 5 en línea
                    modoJuego = 5;
                    mostrarSeleccionBandos(); 
                } else if (clickX >= 600 && clickX <= 800 && clickY >= y && clickY <= y+100) {
                    // Iniciar juego de 6 en línea
                    modoJuego = 6;
                    mostrarSeleccionBandos(); 
                }
                //instrucciones.innerHTML = modoJuego;
            }
        });
    }

    
    let ficha1 = null;
    let ficha2 = null;
    bando1 = []; //Fichas de jugador 1 
    bando2 = []; //Fichas de jugador 2
    function mostrarSeleccionBandos() {
        listenerEnabled = false;
        listenerEnabledSelector = true;
        ficha1 = null;
        ficha2 = null;
        bando1 = [];
        bando2 = [];
        // Arreglo de bandos
        console.log("Cargando bandos");
        //Bando 1
        let y = 170;
        let size = 90;
        let radius = size/2;
        let color = `rgba(0,0,0,255)`;
        //Dibuja las opciones de ficha que tiene el jugador 1 
        let image = fichaBugsBunny;
        let f1 = new Ficha(200, y, radius, color, context, 1, image);
        bando1.push(f1);
        image = fichaPatoLucas;
        let f2 = new Ficha(400, y, radius, color, context, 1, image);
        bando1.push(f2);
        image = fichaTweety;
        let f3 = new Ficha(600, y, radius, color, context, 1, image);
        bando1.push(f3);
        image = fichaWolf;
        let f4 = new Ficha(800, y, radius, color, context, 1, image);
        bando1.push(f4);
        // Bando 2
        y = 350;
         //Dibuja las opciones de ficha que tiene el jugador 1 
        image = fichaBugsBunny;
        let f5 = new Ficha(200, y, radius, color, context, 1, image);
        bando2.push(f5);
        image = fichaPatoLucas;
        let f6 = new Ficha(400, y, radius, color, context, 1, image);
        bando2.push(f6);
        image = fichaTweety;
        let f7 = new Ficha(600, y, radius, color, context, 1, image);
        bando2.push(f7);
        image = fichaWolf;
        let f8 = new Ficha(800, y, radius, color, context, 1, image);
        bando2.push(f8);
        mostrarBandos();
    }
    function mostrarBandos() {
        clearCanvas();
        context.drawImage(backgroundImage, -15, 0, canvas.width+15, canvas.height);
        // Título e instrucciones
        context.font = "45px 'Playpen Sans'";
        context.fillStyle = "lightyellow";
        let x = canvas.width / 2;
        let y = 80;
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.textAlign = "center";
        let texto = "Selecciona tu personaje";
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y); 

        context.font = "25px 'Playpen Sans'";
        
        y = 170;
        
        
        texto = "VS";
        y = 270;
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);

        
        texto = "Volver";
        x = 60;
        y = canvasHeight - (canvasHeight-30);
        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);

        // Dibuja los botones con imágenes
        bando1.forEach(function (ficha) {
            
            ficha.draw();
        });
        bando2.forEach(function (ficha) {
            ficha.draw();
        });

        // Checkea si existe ficha1 y ficha2
        if(ficha1 != null && ficha2 != null){
            //Estilos para boton de iniciar el juego 
            context.drawImage(botonIniciarJuego, 400, 380, 200, 100);
            context.font = "20px 'Playpen Sans'";
            context.fillStyle = "lightyellow";
            context.strokeStyle = "black";
            texto = "Iniciar juego";
            x = canvasWidth/2;
            y = 460;
            context.strokeText(texto, x, y);
            context.fillText(texto, x, y);
        }
    }

    let listenerEnabledSelector;
    canvas.addEventListener("click", function (event) {
        
        if(listenerEnabledSelector){
            const clickX = event.clientX - canvas.getBoundingClientRect().left;
            const clickY = event.clientY - canvas.getBoundingClientRect().top;

            if (clickX <= 100 && clickY >= 200) {
                // Si el click ocurre en ese rango se vuelve al menu de elejir fichas 
                listenerEnabledSelector = false;
                listenerEnabled = true;
                mostrarMenu();
            }else if (clickX >= 300 && clickX <= 700 && clickY >= 400 && clickY <= 500) {
                if(ficha1 != null && ficha2 != null){
                    // Si el click ocurre en ese rango se inicia el juego  
                    listenerEnabledSelector = false;
                    iniciarJuego(modoJuego, ficha1.image, ficha2.image);
                }
            }else{
                for (let i = 0; i < bando1.length; i++) {
                    const ficha = bando1[i];
                    // Verifica si la ficha es dibujable y si se hizo clic en ella
                    if (ficha.draweable && Math.sqrt((ficha.posX - clickX) ** 2 + (ficha.posY - clickY) ** 2) <= ficha.radius) {
                        // Comprueba si hay una ficha del bando 2 seleccionada y su imagen coincide con la ficha actual
                        if(ficha2 != null && ficha.image == ficha2.image){
                            
                        }else{
                            // Itera sobre las demás fichas del bando 1 para desactivarlas y resaltar la ficha seleccionada.
                            for (let j = 0; j < bando1.length; j++) {
                                if (j != i) {
                                    bando1[j].fill = "rgba(0,0,0,255)";
                                    bando2[j].draweable = true;
                                }else{
                                    bando1[j].fill = "rgba(255,255,0,255)";
                                    ficha1 = bando1[j];
                                    bando2[j].draweable = false;
                                }      
                            }
                        }
                    }
                }
                for (let i = 0; i < bando2.length; i++) {
                    const ficha = bando2[i];
                    // Verifica si la ficha es dibujable y si se hizo clic en ella.
                    if (ficha.draweable && Math.sqrt((ficha.posX - clickX) ** 2 + (ficha.posY - clickY) ** 2) <= ficha.radius) {
                        // Comprueba si hay una ficha del bando 1 seleccionada y su imagen coincide con la ficha actual.
                        if (ficha1 != null && ficha.image == ficha1.image) {
                            
                            } else {
                            // Itera sobre las demás fichas del bando 2 para desactivarlas y resaltar la ficha seleccionada.
                                for (let j = 0; j < bando2.length; j++) {
                                    if (j != i) {
                                        bando2[j].fill = "rgba(0,0,0,255)";
                                        bando1[j].draweable = true;
                                    } else {
                                        bando2[j].fill = "rgba(255,0,0,255)";
                                        ficha2 = bando2[j];
                                        bando1[j].draweable = false;
                                    }     
                                        }
                        }    
                    }
                }
                mostrarBandos();
                
            }
        }
    });

    //Función para cargar las imágenes del juego y mostrar las instrucciones 
    //cuando todas las imágenes estén cargadas.
 
    backgroundImage.onload = function () {
        mostrarInstrucciones();
    };
    botonElegirJuego.onload = function () {
        mostrarInstrucciones();
    };
    botonIniciarJuego.onload=function(){
        mostrarInstrucciones();
    };
    background2.onload = function () {
        mostrarInstrucciones();
    }
    fondoTablero.onload = function () {
        mostrarInstrucciones();
    }
    fichaBugsBunny.onload = function () {
        mostrarInstrucciones();
    }
    fichaPatoLucas.onload = function () {
        mostrarInstrucciones();
    }
    letrero.onload = function () {
        mostrarInstrucciones();
    }
    fichaTweety.onload = function () {
        mostrarInstrucciones();
    }
    fichaWolf.onload = function () {
        mostrarInstrucciones();
    }

    
}

//Borrar el contenido del canvas.
function clearCanvas() {
    context.globalCompositeOperation = "source-out";
    // Rellena el canvas con un rectángulo transparente para borrar el contenido anterior.
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.globalCompositeOperation = "source-over";
}

// Llama a la función para cargar las imágenes y mostrar las instrucciones 
//cuando todas las imágenes estén listas.
CargarImagenes();



// function mostrarBtnReiniciar(){
//     listenerEnabledSelector = false;
//     context.drawImage(botonElegirJuego, 400, 215, 200, 50);
//     let texto = "Reiniciar ";
    
//     context.font = "20px 'Playpen Sans'";
//     context.fillStyle = "lightyellow";
//     context.strokeStyle = "black";
//     context.lineWidth = 4;
//     context.textAlign = "center";
//     x=500;
//     y = 250;
//     context.strokeText(texto, x, y);
//     context.fillText(texto, x, y);
       
     
//     // Event listener del boton 
//     canvas.addEventListener("click", function (event) {
//         let listenerEnabled = true; 
//         listenerEnabledSelector = true;
//         if(listenerEnabledSelector){
//             const clickX = event.clientX - canvas.getBoundingClientRect().left;
//             const clickY = event.clientY - canvas.getBoundingClientRect().top;

//             if (clickX >= 400 && clickX <= 600 && clickY >= 115 && clickY <= 415) {
//                 // Si el click ocurre en ese rango se vuelve al menu de elejir fichas 
//                 listenerEnabledSelector = false;
//                 listenerEnabled = true;
//                 console.log("Clickeado");
//                 mostrarMenu();
//             }
//         }
//         });
// }











// // const fichaBugsBunny = "css/imagenes/bugsbunny.png";
// // const fichaPatoLucas = "css/imagenes/patolucas.png";
// // const fichaTweety = "css/imagenes/tweety.png";
// // const fichaWolf = "css/imagenes/wolf.png";

// let seleccionarJugador1 = document.querySelectorAll(".jugador1");
// let seleccionarJugador2 = document.querySelectorAll(".jugador2");
// let fichaJugador1;
// let fichaJugador2;


// let canvas = document.getElementById("miCanvas");
// let ctx = canvas.getContext("2d");

// let turnoJugador1= true; 

// /*
// PANTALLA DE INICIO, SELECCION DE JUGADORES --------------------------
// */

// //Le pone el evento a los personajes del jugador1
// for(let i = 0; i< seleccionarJugador1.length; i++){
//     seleccionarJugador1[i].addEventListener("click", function(){
//         //Para cada personaje, setea en null la ficha y remueve la seleccion
//         for(let i = 0; i< seleccionarJugador1.length; i++){
//             seleccionarJugador1[i].classList.remove("seleccionado");
//             fichaJugador1= null;
//         }
//         //Si el personaje al que se le hace click no esta seleccionado por el jugador 2, lo selecciona
//         if(!seleccionarJugador2[i].classList.contains("seleccionado")){
//             seleccionarJugador1[i].classList.add("seleccionado");
//             fichaJugador1 = `css/imagenes/` + seleccionarJugador1[i].classList[1] + `.png`;
//             console.log(fichaJugador1);
//         } else {
//             //Aca deberia mostrar un mensaje de error de que ya esta seleccionado para el otro jugador
//         }
//     });
// }

// //Le pone el evento a los personajes del jugador2
// for(let i = 0; i< seleccionarJugador2.length; i++){
//     seleccionarJugador2[i].addEventListener("click", function(){
//         //Para cada personaje, setea en null la ficha y remueve la seleccion
//         for(let i = 0; i< seleccionarJugador2.length; i++){
//             seleccionarJugador2[i].classList.remove("seleccionado");
//             fichaJugador2= null;
//         }
//         //Si el personaje al que se le hace click no esta seleccionado por el jugador 2, lo selecciona
//         if(!seleccionarJugador1[i].classList.contains("seleccionado")){
//             seleccionarJugador2[i].classList.add("seleccionado");
//             fichaJugador2 = `css/imagenes/` + seleccionarJugador2[i].classList[1] + `.png`;
//             console.log(fichaJugador2);
//         } else {
//             //Aca deberia mostrar un mensaje de error de que ya esta seleccionado para el otro jugador
//         }
//     });
// }

// /*
// -----------------------------------------------------
// */



// //Me da la x e y de lo que clickee en el canvas
// canvas.addEventListener("click", function(event) {
//     const x = event.offsetX;
//     const y = event.offsetY;
//     console.log("Posición en el canvas: X=" + x + ", Y=" + y);
//     // console.log(tablero6x7.getCeldas()[0][1]);
//     for(let f = 0; f<tableroSeleccionado.filas; f++){
//         for (let c = 0; c < tableroSeleccionado.columnas; c++) {
//             let celda = tableroSeleccionado.getCeldas()[f][c];

//             if((celda.getPosX()<x)&&((celda.getPosX()+celda.getAncho())>x)){
//                 if((celda.getPosY()<y)&&((celda.getPosY()+celda.getAlto())>y)){
//                     console.log(celda)
//                 }
//             }
//         }
//     }

    
// });

// let anchoCanvas = 1000;
// let altoCanvas = 500;

// let ancho = 500;
// let alto = 350;

// let tablero6x7 = new Tablero(ancho, alto, 6, 7, ctx);
// let tablero7x8 = new Tablero(ancho, alto, 7, 8, ctx);
// let tablero8x9 = new Tablero(ancho, alto, 8, 9, ctx);
// let tablero9x10 = new Tablero(ancho, alto, 9, 10, ctx);

// let tableroSeleccionado = tablero6x7;

// // console.log(tablero6x7);

// //Sector para las fichas
// //Fichas jugador 1
// let j1InicioX = 0;
// let j1FinX = ((anchoCanvas - ancho)/2)-100;
// let j1InicioY = alto/2;
// let j1FinY = alto-100;

// //Fichas jugador 2
// let j2InicioX = j1FinX + ancho + 100;
// let j2FinX = anchoCanvas-100;
// let j2InicioY = alto/2;
// let j2FinY = alto-100;



// console.log(j1InicioX, j1FinX, j1InicioY, j1FinY);
// console.log(j2InicioX, j2FinX, j2InicioY, j2FinY);

// function dibujarFichas(j, array, inicioX, inicioY, finX, finY){
//     for (let i=0; i<(6*7)/2; i++){
//         let posX = x;
//         let posY = altoCanvas/2 + i;
//         let posY = 20*i;

//         let difX = finX - inicioX;
//         let difY = finY - inicioY;
//         let x = inicioX + Math.random()*difX;
//         let y = inicioY + Math.random()*difY;

//         array.push(new Ficha(j));
//         array[i].draw(x, y, 70);
//     } 
// }


// let fichasJugador1 = new Array();
// let fichasJugador2 = new Array();


// let btnJugar = document.querySelector("#empezar-jugar-ejecucion");
// let divSelector = document.querySelector("#selectorPersonaje");

// //Le agrega evento al boton empezar a jugar
// btnJugar.addEventListener("click", function(){
//     //Si ambos jugadores tienen su personaje, se oculta el div de seleccion y el boton y se dibuja el tablero
//     if(fichaJugador1!=null && fichaJugador2!=null){
//         divSelector.classList.add("cerrar");
//         btnJugar.classList.add("cerrar");
//         tableroSeleccionado.draw();

        
        
//         dibujarFichas(fichaJugador1, fichasJugador1, j1InicioX, j1InicioY, j1FinX, j1FinY);
//         dibujarFichas(fichaJugador2, fichasJugador2, j2InicioX, j2InicioY, j2FinX, j2FinY);
//         pasarTurno();
//         //dibujarFichas(fichaJugador1, 10, fichasJugador1);
//         //dibujarFichas(fichaJugador2, anchoCanvas - 120, fichasJugador2);
//     } else {
//         //Mostrar un mensaje de error
//         console.log("Seleccionar personajes");
//     }
// });

// console.log(tableroSeleccionado);


//   let fichaSeleccionada = null; // Variable para mantener un seguimiento de la ficha seleccionada
  
 
  
//   function pasarTurno(){
//     if(turnoJugador1){
//         fichaEnJuego(fichasJugador1);
//     }
//     else{
//         fichaEnJuego(fichasJugador2)
//     }
//   }
  
//   function fichaEnJuego(fichas){
//     if(fichas.length>0){
//         fichaSeleccionada= fichas.pop();
//         console.log(fichaSeleccionada)
//         //Dibuja en la pos deseada la ficha en juego 
//         fichaSeleccionada.draw(150, 100 , 70);
//         fichaSeleccionada.addEventListener("click", console.log("Anda"));
//     }
//   }