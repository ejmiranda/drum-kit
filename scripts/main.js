let body = document.querySelector(`body`);

function Key(keyId, audioSrc) {
  this.keyId = keyId;
  this.audioSrc = audioSrc;
  this.clear = () => {
    this.keyId = ``;
    this.audioSrc = ``;
  };
}

let keys = [
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

body.addEventListener('keydown', (event) => {
  let selection = new Key(``, ``);
  applySelection(selection, event.key);
  changeKeyStyle(selection.keyId);
  playSound(selection.audioSrc);
});

function applySelection(selection, eventKey) {
  for (i = 0; i < keys.length; i++) {
    if (keys[i].keyId === eventKey) {
      selection.keyId = keys[i].keyId;
      selection.audioSrc = keys[i].audioSrc;
      break;
    }
    selection.clear();
  }
}

function changeKeyStyle(selectionKeyId) {
  if (selectionKeyId) {
    let key = document.getElementById(selectionKeyId);
    key.classList.toggle(`key-down`);
    window.setTimeout(() => {
      key.classList.toggle(`key-down`);
    }, 100);
  }
}

function playSound(selectionAudioSrc) {
  if (selectionAudioSrc) {
    let sound = document.createElement(`AUDIO`);
    sound.src = selectionAudioSrc;
    sound.play();
  }
}