// sound event and add playing class
const soundEvent = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // audio playing
  if(!audio) return
  audio.currentTime = 0;
  audio.play();
  // adding/removing class
  key.classList.add('playing');
}

// remove playing class
const removeClass = e => {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing')
  } else return ;
}

// keydown sound event
document.addEventListener('keydown', soundEvent)
// transition keys - removing class
const keys = document.querySelectorAll('.keys')
keys.forEach(key => key.addEventListener('transitionend', removeClass))
