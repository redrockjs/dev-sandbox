/* Get Our Elements */
const player = document.querySelector('.player');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenBtn = player.querySelector('.fullscreenBtn');


const video = document.getElementById('_video')
//const progress = document.getElementById('progress')

const bigBtn = document.getElementById('bigBtn')
const iconPlay = document.getElementById('iconplay')
const iconPause = document.getElementById('iconpause')

/* Build out functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    if (video.paused) {
        iconPlay.setAttribute('style','display:block;')
        iconPause.setAttribute('style','display:none;')
        bigBtn.setAttribute('style','display:block;')
        console.log("play")
    } else {
        iconPlay.setAttribute('style','display:none;')
        iconPause.setAttribute('style','display:block;')
        bigBtn.setAttribute('style','display:none;')
        console.log("pause")
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    let percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
}

function scrub() {
    const scrubTime = (video.currentTime / video.duration) * 100;
    video.currentTime = scrubTime;
}

function videoChangeTime() {
    // if (progressBar.value == 100) {
    //     videoPlay();
    // }
    video.currentTime = (video.duration * progress.value) / 100;
}


function fullscreen(){
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }
    console.log('fullscreen pressed')
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

//fullscreenBtn.addEventListener('click', fullscreen);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && videoChangeTime);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

