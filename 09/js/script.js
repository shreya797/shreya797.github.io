(function() {
let counter = 0;

const originalHTML = document.body.innerHTML;
let messageWrapper = document.getElementById('message');

document.onclick = function(event) {
    event.preventDefault();
    document.body.innerHTML = originalHTML;
    messageWrapper = document.getElementById('message');
}

document.onkeydown = function (event) {
    if (event.keyCode === 32) {
        event.preventDefault();
    }

}

document.onkeyup = function(event) {
    const keyCodePressed = event.keyCode;
    const coordinates = helpers.generateCoordinates();
    messageWrapper.innerText = keyCodePressed + ':' + event.key;

    if (keyCodePressed === 65) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const apple = document.createElement('img');
        apple.className = 'apple';
        apple.src = `img/apple.png`;
        apple.style.left = `${coordinates.x}px`;
        apple.style.top = `${coordinates.y}px`;
        apple.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(apple);

    }

    if (keyCodePressed === 66) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const bat = document.createElement('img');
        bat.className = 'bat';
        bat.src = `img/bat.png`;
        bat.style.left = `${coordinates.x}px`;
        bat.style.top = `${coordinates.y}px`;
        bat.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(bat);

    }

    if (keyCodePressed === 67) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const cat = document.createElement('img');
        cat.className = 'cat';
        cat.src = `img/cat.png`;
        cat.style.left = `${coordinates.x}px`;
        cat.style.top = `${coordinates.y}px`;
        cat.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(cat);

    }


    if (keyCodePressed === 68) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const dog = document.createElement('img');
        dog.className = 'dog';
        dog.src = `img/dog.png`;
        dog.style.left = `${coordinates.x}px`;
        dog.style.top = `${coordinates.y}px`;
        dog.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(dog);

    }

    if (keyCodePressed === 69) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const egg = document.createElement('img');
        egg.className = 'egg';
        egg.src = `img/egg.png`;
        egg.style.left = `${coordinates.x}px`;
        egg.style.top = `${coordinates.y}px`;
        egg.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(egg);

    }


    if (keyCodePressed === 70) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const fish = document.createElement('img');
        fish.className = 'fish';
        fish.src = `img/fish.png`;
        fish.style.left = `${coordinates.x}px`;
        fish.style.top = `${coordinates.y}px`;
        fish.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(fish);

    }



    if (keyCodePressed === 71) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const giraffe = document.createElement('img');
        giraffe.className = 'giraffe';
        giraffe.src = `img/giraffe.png`;
        giraffe.style.left = `${coordinates.x}px`;
        giraffe.style.top = `${coordinates.y}px`;
        giraffe.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(giraffe);

    }


    if (keyCodePressed === 72) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const hat = document.createElement('img');
        hat.className = 'hat';
        hat.src = `img/hat.png`;
        hat.style.left = `${coordinates.x}px`;
        hat.style.top = `${coordinates.y}px`;
        hat.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(hat);

    }


    if (keyCodePressed === 73) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const icecream = document.createElement('img');
        icecream.className = 'icecream';
        icecream.src = `img/icecream.png`;
        icecream.style.left = `${coordinates.x}px`;
        icecream.style.top = `${coordinates.y}px`;
        icecream.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(icecream);

    }

    if (keyCodePressed === 74) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const jello = document.createElement('img');
        jello.className = 'jello';
        jello.src = `img/jello.png`;
        jello.style.left = `${coordinates.x}px`;
        jello.style.top = `${coordinates.y}px`;
        jello.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(jello);

    }

    if (keyCodePressed === 75) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const key = document.createElement('img');
        key.className = 'key';
        key.src = `img/key.png`;
        key.style.left = `${coordinates.x}px`;
        key.style.top = `${coordinates.y}px`;
        key.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(key);

    }

    if (keyCodePressed === 76) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const lantern = document.createElement('img');
        lantern.className = 'lantern';
        lantern.src = `img/lantern.png`;
        lantern.style.left = `${coordinates.x}px`;
        lantern.style.top = `${coordinates.y}px`;
        lantern.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(lantern);

    }

    if (keyCodePressed === 77) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const monkey = document.createElement('img');
        monkey.className = 'monkey';
        monkey.src = `img/monkey.png`;
        monkey.style.left = `${coordinates.x}px`;
        monkey.style.top = `${coordinates.y}px`;
        monkey.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(monkey);

    }


    if (keyCodePressed === 78) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const nest = document.createElement('img');
        nest.className = 'nest';
        nest.src = `img/nest.png`;
        nest.style.left = `${coordinates.x}px`;
        nest.style.top = `${coordinates.y}px`;
        nest.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(nest);

    }


    if (keyCodePressed === 79) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const octopus = document.createElement('img');
        octopus.className = 'octopus';
        octopus.src = `img/octopus.png`;
        octopus.style.left = `${coordinates.x}px`;
        octopus.style.top = `${coordinates.y}px`;
        octopus.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(octopus);

    }

    if (keyCodePressed === 80) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const penguin = document.createElement('img');
        penguin.className = 'penguin';
        penguin.src = `img/penguin.png`;
        penguin.style.left = `${coordinates.x}px`;
        penguin.style.top = `${coordinates.y}px`;
        penguin.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(penguin);

    }

    if (keyCodePressed === 81) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const question = document.createElement('img');
        question.className = 'question';
        question.src = `img/question.png`;
        question.style.left = `${coordinates.x}px`;
        question.style.top = `${coordinates.y}px`;
        question.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(question);

    }

    if (keyCodePressed === 82) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const rose = document.createElement('img');
        rose.className = 'rose';
        rose.src = `img/rose.png`;
        rose.style.left = `${coordinates.x}px`;
        rose.style.top = `${coordinates.y}px`;
        rose.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(rose);

    }


    if (keyCodePressed === 83) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const shark = document.createElement('img');
        shark.className = 'shark';
        shark.src = `img/shark.png`;
        shark.style.left = `${coordinates.x}px`;
        shark.style.top = `${coordinates.y}px`;
        shark.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(shark);

    }


    if (keyCodePressed === 84) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const tomato = document.createElement('img');
        tomato.className = 'tomato';
        tomato.src = `img/tomato.png`;
        tomato.style.left = `${coordinates.x}px`;
        tomato.style.top = `${coordinates.y}px`;
        tomato.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(tomato);

    }

    if (keyCodePressed === 85) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const umberella = document.createElement('img');
        umberella.className = 'umberella';
        umberella.src = `img/umberella.png`;
        umberella.style.left = `${coordinates.x}px`;
        umberella.style.top = `${coordinates.y}px`;
        umberella.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(umberella);

    }


    if (keyCodePressed === 86) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const vac = document.createElement('img');
        vac.className = 'vac';
        vac.src = `img/vac.png`;
        vac.style.left = `${coordinates.x}px`;
        vac.style.top = `${coordinates.y}px`;
        vac.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(vac);

    }


    if (keyCodePressed === 87) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const whale = document.createElement('img');
        whale.className = 'whale';
        whale.src = `img/whale.png`;
        whale.style.left = `${coordinates.x}px`;
        whale.style.top = `${coordinates.y}px`;
        whale.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(whale);

    }

    if (keyCodePressed === 88) {

        const degreesRotaion = Math.floor(Math.random()*360);

        const xray = document.createElement('img');
        xray.className = 'xray';
        xray.src = `img/xray.png`;
        xray.style.left = `${coordinates.x}px`;
        xray.style.top = `${coordinates.y}px`;
        xray.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(xray);

    }


    

















    else if (keyCodePressed === 32) {
        helpers.removeClass('animated');
        document.body.style.backgroundColor = helpers.generateRandomColorString();
      }





    counter ++;
    messageWrapper.style.zIndex = counter;

}

const getPhrase = function () {
    const exclamations = ['Wow!', 'Neat!', 'Incredible!', 'JavaScript rules!', 'Bravo!', 'Fantastic!', 'Creative Computing'];
    const index = Math.floor(Math.random() * exclamations.length);
    return exclamations[index];
  }

  setInterval(function () {
    messageWrapper.style.color = helpers.generateRandomColorString(false);
  }, 1000);

  // This object contains helper functions
  const helpers = {

    removeClass: (cssClass) => {
      if (document.body.classList.contains(cssClass)) {
        document.body.classList.remove(cssClass);
      }
    },

    generateCoordinates: () => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      return { x, y };
    },

    // helpers.generateRandomColorString()
    generateRandomColorString: (alpha = true) => {
      // random RBG values
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      // fully opaque if `false` is passed to function
      let a = 1;
      if (alpha) {
        a = Math.random();
      }

      return `rgba(${r},${g},${b},${a})`;
    }

}



    
} ()); 