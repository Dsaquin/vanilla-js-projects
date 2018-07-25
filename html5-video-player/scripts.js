//  get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullScreen = player.querySelector(".full__screen");
// build our functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  //// option 2: faster ////
  // 	const method = video.paused ? 'play' : 'pause';
  // 	video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleScreenSize() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    /* IE/Edge */
    video.msRequestFullscreen();
  }
}

// hook up the event listeners
// clicking video and button
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));

let isDown = false;
ranges.forEach(range => range.addEventListener("click", handleRangeUpdate));
ranges.forEach(range =>
  range.addEventListener("mousemove", e => isDown && handleRangeUpdate(e))
);
ranges.forEach(range =>
  range.addEventListener("mousedown", () => (isDown = true))
);
ranges.forEach(range =>
  range.addEventListener("mouseup", () => (isDown = false))
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
// or
// progress.addEventListener('mousemove', () => {
// 	if(mousedown) {
// 		scrub();
// 	}
// });
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullScreen.addEventListener("click", handleScreenSize);
