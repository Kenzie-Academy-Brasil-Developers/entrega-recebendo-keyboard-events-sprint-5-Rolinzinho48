let player = document.getElementById("caixa")

let contadorX = 0
let contadorY = 0
let rotacao = 0

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName == "d"){
        contadorX+=10
        rotacao = 0
    }
    if(keyName == "s"){
        contadorY+=10
        rotacao = 90
    }
    if(keyName == "a"){
        contadorX-=10
        rotacao = 180
    }
    if(keyName ==  "w"){
        contadorY-=10
        rotacao = -90
    }
    
   
    player.style.transform = `translate(${contadorX}px,${contadorY}px) rotate(${rotacao}deg)`
   // player.style.transform = `rotate(${rotacao}deg)`
  });

