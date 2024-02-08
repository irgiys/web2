const video = document.getElementById("video");
const videoV = document.getElementById("video-overlay");

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
