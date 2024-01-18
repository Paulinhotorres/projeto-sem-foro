const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
 let colorIndex = 0;
 let intervalID = null;
const trafficlight = (Event) => {
     stopautomatic();
    turnOn[Event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex :0;


const changecolor = () =>{
    const colors = ['red','yellow', 'green']
    const color = colors[colorIndex];
turnOn[color]();
 nextIndex();
}

const stopautomatic= () => {
clearInterval ( intervalID );
}

const turnOn = {
    'red': () => img.src = 'vermelho.jpg',
 'yellow': () => img.src = 'amarelo.jpg',
 'green': () => img.src = 'verde.jpg', 
 'automatic': () => intervalID =  setInterval(changecolor, 1000)
   

}
buttons.addEventListener('click', trafficlight);