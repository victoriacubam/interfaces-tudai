let canvas = document.getElementById('miCanvas');
let context = canvas.getContext('2d');
let width = 600;
let height= 300;



let color= pintar();
let f1 = new Ficha(50,50, color , context);
f1.draw();


function pintar() {
   
    let r= 13;
    let g= 220;
    let b=24;
    let a=1;
    console.log("chau");
    return `rgba(${r}, ${g}, ${b}, ${a})`;

}