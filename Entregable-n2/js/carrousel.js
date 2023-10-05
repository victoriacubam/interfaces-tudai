function App(){}
    window.onload = function(event){
        let app = new App();
        window.app = app;
    }

    App.prototype.processingButton= function(event){
        constbtn = event.currentTarget;
        const carrouselList = event.currentTargent.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrousel');

        const carrouselWidth =  carrusel[0].offsetWidth;
        
        const trackWidth = track.offsetWidth;
        const listWidth = carrouselList.offsetWidth;

        
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = paserFloat(track.style.left.clice(0,-2) *-1);
        btn.dataset.button = "izq" ? prevAction(leftPosition,carrouselWidth, track) : nextAction(leftPosition, trackWidth , listWidth, carrouselWidth, track);
    }

    let prevAction = (leftPosition, carrouselWidth , track) => {
        if(leftPosition >0){
            track.style.left=   `${-1 *(leftPosition - carrouselWidth)}px`
        }
    }

    let nextAction = (leftPosition , trackWidth , listWidth, carrouselWidth, track) =>{
        if (leftPosition < (trackWidth = listWidth)){
            track.style.left=   `${-1 *(leftPosition - carrouselWidth)}px`
        }
    }
