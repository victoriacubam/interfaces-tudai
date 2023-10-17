// let ctx= document.querySelector("#miCanvas").getContext("2d");

// let width = 200;
// let height= 100;
// let r= 13;
// let g=220;
// let b=24;
// let a=1;

// let imageData= ctx.createImageData(width , height);
// let coeficiente= 255/width;

// for(let x= 0; x<width; x++){
//     r= coeficiente*x;
//     g= coeficiente*x;
//     for(let y= 0; y<height; y++){
//         setPixel(imageData , x, y, r, g,b,a);
//     }
// }

// // setPixel(imageData , 20, 20, 225, 0,0,1);
// // setPixel(imageData , 21, 20, 225, 0,0,1);
// // setPixel(imageData , 22, 20, 225, 0,0,1);
// // setPixel(imageData , 23, 20, 225, 0,0,1);

// ctx.putImageData(imageData, 0,0);

// function setPixel(imageData, x, y, r, g, b, a) {
//     index= (x + y * imageData.width)*4;
//     imageData.data[index + 0]=r;
//     imageData.data[index + 1]=g;
//     imageData.data[index + 2]=b;
//     imageData.data[index + 3]=a; 
// }


let canvas = document.getElementById('miCanvas');
let ctx = canvas.getContext('2d');

let width = 200;
let height= 100;
let r= 13;
let g=220;
let b=24;
let a=1;

let imageData= ctx.createImageData(width , height);
//let coeficiente= 255/width;

for(let x0= 0; x0<width; x0++){
   
    for(let y0= 0; y0<height; y0++){
        setPixel(imageData , x0, y0, r, g,b,a);
    }
}


ctx.putImageData(imageData, 0,0);

function setPixel(imageData, x0, y0, r, g, b, a) {
    index= (x0 + y0 * imageData.width)*4;
    imageData.data[index + 0]=r;
    imageData.data[index + 1]=g;
    imageData.data[index + 2]=b;
    imageData.data[index + 3]=a; 
}

let x = 100,
    y = 75,
    // Radio de la luz
    innerRadius = 5,
    outerRadius = 100,
    // Radio del circulo entero
    radius = 60;

let gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'black');




ctx.arc(x, y, radius, 0, 2 * Math.PI);

ctx.fillStyle = gradient;
ctx.fill();


