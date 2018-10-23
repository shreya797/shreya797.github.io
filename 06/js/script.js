
"use strict"; /*-- so that it works on safari*/ 

/* no matter where the script file is, your code will work*/

(function (){

})(); 





const messageWrapper = document.getElementById('message');


const name = prompt('What is your name?');
const age = prompt('What is your age?');
const soulmate = prompt('Who is your soulmate?');


console.log('Hello, ' + name + '! ' + 'You are ' + age + ' years old!'); 

let message = 'Hello, ' + name + '!\n'; 
message += ' You are ' + age + ' years old!\n';


if (age > 30) { 
    message += 'That\'s old!'; 
} else if (age < 13) {
    message += 'Should you even be on the internet?'
}
else if (age == 20) {
    message += 'You\'re going to turn 21 soon!' 
}
message +=  'Your soulmate is ' + soulmate + '!'; 

messageWrapper.innerHTML = message; 





