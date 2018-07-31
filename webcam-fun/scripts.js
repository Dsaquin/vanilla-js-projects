const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false }) // getting a promise
    .then(localMediaStream => {
      //   console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream); // set the src to be this local media stream..
      //   in order to work(can't bc it's an object) need to convert it to URL so video player understands
      video.play(); // inspecting video shows its source saying 'blob' (means its raw data being piped in off webcam)
    })
    .catch(err => {
      //if user doesn't allow to access webcam the error needs to be handled
      console.error(`OH NO!!`, err);
    });
}

function paintToCanvas() {
  const { videoWidth: width, videoHeight: height } = video; // need video's w&h to set same for canvas
  console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  // return gives you access to interval to call clearInterval if needed to exit
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height); //pass in an image/video into drawImage and it'll paint to canvas context..start at top left n paint w&h
    // take pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1; // pixels under other pixels will show for 10 more frames..something like a lag..ghost effect
    pixels = greenScreen(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // played sound
  snap.currentTime = 0;
  snap.play();

  // take data of out canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "pretty");
  link.innerHTML = `<img src="${data}" alt="Beautiful" />`; // put image in page
  strip.insertBefore(link, strip.firstChild); // same as jQuery's ".prepend"...put link here
}

// filter works by getting pixels out of canvas and mess with them and then put them back
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //r
    pixels.data[i + 1] = pixels.data[i + 1] - 100; // g
    pixels.data[i + 2] = pixels.data[i + 2] * 2; //b
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; //r
    pixels.data[i + 300] = pixels.data[i + 1]; // g
    pixels.data[i - 300] = pixels.data[i + 2]; //b
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach(input => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i += 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
