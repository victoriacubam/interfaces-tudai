const buttonPrev = document.getElementById('btn-prev');
const buttonNext = document.getElementById('btn-next');
const track = document.getElementById('track');
const carrouselList = document.getElementById('carrousel-list' );
const card = document.querySelectorAll('.card');

const slickWidth = card[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = carrouselList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0 , -2) * -1);

    if(leftPosition < (trackWidth -listWidth) && value == 2){
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`
        }
        else if(leftPosition > 0 && value == 1){
            track.style.left =`${-1 * (leftPosition - slickWidth)}px`
        }
}

const buttonPrev2 = document.getElementById('btn-prev-2' );
const buttonNext2 = document.getElementById('btn-next-2');
const track2 = document.getElementById( 'track-2');
const carrouselList2 = document.getElementById('carrousel-list-2' );
const card2 = document.querySelectorAll('.card-2');

const slickWidth2 = card2[0].offsetWidth;

buttonPrev2.onclick = () => Move2(1);
buttonNext2.onclick = () => Move2(2);

function Move2(value) {
    const trackWidth = track2.offsetWidth;
    const listWidth = carrouselList2.offsetWidth;

    track2.style.left == "" ? leftPosition = track2.style.left = 0 : leftPosition = parseFloat(track2.style.left.slice(0 , -2) * -1);

    if(leftPosition < (trackWidth -listWidth) && value == 2){
        track2.style.left = `${-1 * (leftPosition + slickWidth)}px`
        }
        else if(leftPosition > 0 && value == 1){
            track2.style.left =`${-1 * (leftPosition - slickWidth)}px`
        }
}

const buttonPrev3 = document.getElementById('btn-prev-3' );
const buttonNext3 = document.getElementById('btn-next-3');
const track3 = document.getElementById( 'track-3');
const carrouselList3 = document.getElementById('carrousel-list-3' );
const card3 = document.querySelectorAll('.card-3');

const slickWidth3 = card3[0].offsetWidth;

buttonPrev3.onclick = () => Move3(1);
buttonNext3.onclick = () => Move3(2);

function Move3(value) {
    const trackWidth = track3.offsetWidth;
    const listWidth = carrouselList3.offsetWidth;

    track3.style.left == "" ? leftPosition = track3.style.left = 0 : leftPosition = parseFloat(track3.style.left.slice(0 , -2) * -1);

    if(leftPosition < (trackWidth -listWidth) && value == 2){
        track3.style.left = `${-1 * (leftPosition + slickWidth)}px`
        }
        else if(leftPosition > 0 && value == 1){
            track3.style.left =`${-1 * (leftPosition - slickWidth)}px`
        }
}

let corazones = document.querySelectorAll('#like');
let pintado = true;

corazones.forEach(function(corazon) {
        corazon.addEventListener('click', function() {
                if (pintado) {
                    corazon.src = '../css/imagenes/iconos/marcar_fav.png'; // Cambia la imagen a corazón sin pintar
                } else {
                    corazon.src = '../css/imagenes/iconos/favorito.png'; // Cambia la imagen a corazón pintado
                }

    pintado = !pintado; 
            });
});



let guardados = document.querySelectorAll('#guardar');
let guardado = true;

guardados.forEach(function(guardar) {
        guardar.addEventListener('click', function() {
                if (guardado) {
                    guardar.src = '../css/imagenes/iconos/guardar.png'; // Cambia la imagen a corazón sin pintar
                } else {
                    guardar.src = '../css/imagenes/iconos/guardado.png'; // Cambia la imagen a corazón pintado
                }

    guardado = !guardado; 
            });
});



