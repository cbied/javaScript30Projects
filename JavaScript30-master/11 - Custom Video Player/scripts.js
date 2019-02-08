// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipBtns = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');


// build our functions

// toggle play
function togglePlay() {
    return video.paused ? video.play() : video.pause();
}
// update play/pause btn 
function updateBtn() { 
    return video.paused ? toggle.innerHTML = "►" : toggle.innerHTML = '❚ ❚';
}

// skip btns
function skipBtn() {
   video.currentTime += parseFloat(this.dataset.skip);
}

// range update
function handleRangeUpdate() {
   video[this.name] = this.value   
}

// progress bar 
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

// scrub progress bar
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}




// hook up event listeners 

// toggle play & update play/pause btn
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);

// skip btns
skipBtns.forEach(btn => btn.addEventListener('click', skipBtn))

// range update
range.forEach(slider => slider.addEventListener('change', handleRangeUpdate));

// progressBar
video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown === true);
progress.addEventListener('mouseup', () => mousedown === false);

