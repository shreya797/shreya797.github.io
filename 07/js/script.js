"use strict"; /*-- so that it works on safari*/ 

/* no matter where the script file is, your code will work*/

(function (){

})(); 



const messageWrapper = document.getElementById('message');


var nOne = parseInt(prompt('Enter first number'));
var nTwo = parseInt(prompt('Enter second number'));
var nThree = parseInt(prompt('Enter third number'));
var nFour = parseInt(prompt('Enter fourth number')); 

 
let message = 'Your answer is ' + (nOne+nTwo-nThree) *nFour; 
message += ' and your numbers are ' + "nOne" + "nTwo" + "nThree" + "nFour";


messageWrapper.innerHTML = message; 


