const buttonPrev = document.getElementById('btn-prev');
const buttonNext = document.getElementById('btn-next');
const track = document.getElementById('track');
const carrouselList = document.getElementById('carrousel-list');
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