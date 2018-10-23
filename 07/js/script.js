"use strict"; /*-- so that it works on safari*/ 

/* no matter where the script file is, your code will work*/

(function (){

})(); 



const messageWrapper = document.getElementById('message');


var nOne = prompt('Enter first number');
var nTwo = prompt('Enter second number');
var nThree = prompt('Enter third number');
var nFour = prompt('Enter fourth number');

 
let message = 'Your answer is ' + (nOne+nTwo-nThree) *nFour; 


messageWrapper.innerHTML = message; 


