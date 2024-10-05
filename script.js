

let arrayImg = ["/imgs/carrusel/1.webp", "/imgs/carrusel/2.webp", "/imgs/carrusel/3.webp"];
let Indice = 0;
const image = document.getElementById("imagencarrusell");

console.log(arrayImg.length);

function moveRight(){
    Indice ++;
    if(Indice> (arrayImg.length -1)){
        Indice = 0;
    }
    image.src = arrayImg[Indice];
}

function moveLeft(){
    Indice--;
    if(Indice < 0){
        Indice = (arrayImg.length-1);
    }
    image.src = arrayImg[Indice];
}

setInterval(moveRight,5000);

