"use strict"; /*-- so that it works on safari*/ 

/* no matter where the script file is, your code will work*/

(function (){

})(); 


/*let keyCodePressed;---'let' is used oustide the function - let is used to hold a spot to assign a variable*/ 

let coordinateWrapper = document.getElementById('coordinates');


document.onkeyup = function(event) {
   const keyCodePressed = event.keyCode;
    document.getElementById('message').innerHTML = keyCodePressed; 
    if (keyCodePressed === 13) {
        // second number is generating random between 0,100
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        console.log(x,y);
        const coordinates = 'x: ' + x + ' , y: ' + y;
        document.getElementById('coordinates').innerHTML = coordinates;

        coordinateWrapper.appendChild(document.createElement('div')); 
    }

}











/*console.log(event.keyCode); -- referencing the key code part of the key that you release and so your console will display the key code for the specific key that you release*/ 