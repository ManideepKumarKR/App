// team video
const video4 = document.getElementById("TeamVideo");
const playButton4 = document.getElementById("playButton4");
const stopButton4 = document.getElementById("stopButton4");

// Play button click event
playButton4.addEventListener("click", function () {
  video4.play();
});

// Stop button click event
stopButton4.addEventListener("click", function () {
  video4.pause();
  video4.currentTime = 0; // Reset video to the beginning
});

// Scroll event to pause the video
window.addEventListener("scroll", function () {
  if (video4.paused === false) {
    video4.pause();
  }
});
