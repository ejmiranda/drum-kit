let screenBody = document.querySelector(`body`);
let screenKeys = Array.from(document.querySelectorAll(`.key`));

function Key(letter, audioSrc) {
  this.letter = letter;
  this.audioSrc = audioSrc;
  this.clear = () => {
    this.letter = ``;
    this.audioSrc = ``;
  };
}

let drumKeys = [
  new Key(`a`, `media/clap.wav`),
  new Key(`s`, `media/hihat.wav`),
  new Key(`d`, `media/kick.wav`),
  new Key(`f`, `media/openhat.wav`),
  new Key(`g`, `media/boom.wav`),
  new Key(`h`, `media/ride.wav`),
  new Key(`j`, `media/snare.wav`),
  new Key(`k`, `media/tom.wav`),
  new Key(`l`, `media/tink.wav`),
];

screenBody.addEventListener(`keydown`, (event) => {
  let selected = new Key(``, ``);
  let eventLetter = event.key;
  applySelected(selected, eventLetter);
  toggleStyle(selected.letter);
  playSound(selected.audioSrc);
});

screenKeys.forEach((screenKey) => {
  screenKey.addEventListener(`click`, (event) => {
    let selected = new Key(``, ``);
    let eventLetter = ``;
    if ((event.target.nodeName === `H1`) || (event.target.nodeName === `P`)) {
      eventLetter = event.path[1].id;
    } else {
      eventLetter = event.path[0].id;
    }
    applySelected(selected, eventLetter);
    toggleStyle(selected.letter);
    playSound(selected.audioSrc);
  });
});

function applySelected(selected, eventLetter) {
  for (i = 0; i < drumKeys.length; i++) {
    if (drumKeys[i].letter === eventLetter) {
      selected.letter = drumKeys[i].letter;
      selected.audioSrc = drumKeys[i].audioSrc;
      break;
    }
    selected.clear();
  }
}

function toggleStyle(selectedLetter) {
  if (selectedLetter) {
    let keyToStyle = document.getElementById(selectedLetter);
    keyToStyle.classList.toggle(`key-down`);
    window.setTimeout(() => {
      keyToStyle.classList.toggle(`key-down`);
    }, 100);
  }
}

function playSound(selectedAudioSrc) {
  if (selectedAudioSrc) {
    let sound = document.createElement(`AUDIO`);
    sound.src = selectedAudioSrc;
    sound.play();
  }
}