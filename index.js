const target = document.getElementById('target');
let array = ["marketing", "growth", "web3"];
let wordIndex = 0
let letterIndex = 0

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  },1200);
};

const loop = () => {
    setTimeout(() => {
        //Le premier if sert à revenir à 0, Si on ne doit pas revenir à 0, alors on sort une nouvelle lettre
if (wordIndex >= array.length) {
    wordIndex = 0;
letterIndex = 0;
loop();
} else if (letterIndex < array[wordIndex].length) {
    //Le 2eme sert à changer de lettre, Si on ne doit pas changer de lettre alors on doit changer de mot 
    createLetter();
    letterIndex++;
    loop();
} else {
    //Si on ne doit pas changer de lettre, alors c'est qu'on change de mot. 
    wordIndex++;
    letterIndex = 0;
    setTimeout(() => {
        loop();
    }, 1200)
}
    }, 50);
};
loop();