var frameNumber = 0;
var playbackConst = 300;
var setHeight = document.getElementById("set-height");
var vid = document.getElementById('video');

vid.addEventListener('loadedmetadata', function() {
setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

function scrollPlay(){
var frameNumber = window.pageYOffset/playbackConst;
vid.currentTime = frameNumber;
window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
