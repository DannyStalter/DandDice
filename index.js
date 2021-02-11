const rollButton = document.querySelector('#roll-button');
const diceContainer = document.querySelector('.dice-container');
const dice = document.querySelector('.dice');
const diceNumber = document.querySelector('.dice-number');
const diceAudio = document.querySelector('#dice-audio');
const diceAudio2 = document.querySelector('#dice-audio2');

function resetRoll(){
  diceContainer.classList.remove('falling');
  dice.classList.remove('rolling');
  diceNumber.classList.remove('rolling');

  //JS 'trick' to allow reset of animation
  void diceContainer.offsetWidth;
  void dice.offsetWidth;
  void diceNumber.offsetWidth;
}


function diceroll(){
  resetRoll();

  let roll = Math.floor((Math.random() * 20) +1);
  document.querySelector('.dice-number').innerHTML=(roll);
  diceContainer.classList.add('falling');
  dice.classList.add('rolling');
  diceNumber.classList.add('rolling');
  diceAudio.volume = 0.2;
  diceAudio2.volume = 0.15;
  setTimeout(function() {
    diceAudio2.play();
  }, 170);
  setTimeout(function() {
    diceAudio.play();
  }, 270);
}

function diceColor(color){
  dice.src = "images/d20" + color + ".png";
}

rollButton.addEventListener('click', diceroll);
