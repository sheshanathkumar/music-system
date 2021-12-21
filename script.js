const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const songDuration = document.querySelector("#duration");

// Song title
const songs = [
  "apple_tune.mp3",
  "Hey-Ram.mp3",
  "nokia_tune_k.mp3",
  "sony_tune.mp3",
];

// Keep track of songs
let songIdx = 0;
loadSong(songs[songIdx]);

function loadSong(song) {
  title.innerText = song;
  console.log("calling load song " + title.innerText);
  audio.src = `music/${song}`;
  // cover.src = `asset/wheel.jpg`;
}

function getSongList() {}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

function playSong() {
  const isPlaying = musicContainer.classList.contains("play");
  console.log("current song index " + songIdx);
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function prevSong() {
  if (songIdx != 0) {
    songIdx--;
  } else {
    songIdx = songs.length - 1;
  }
  loadSong(songs[songIdx]);
  playSong();
  console.log("current song number " + songIdx);
}

function nextSong() {
  console.log("current song idx " + songIdx + "total Song " + songs.length);
  if (songIdx != songs.length - 1) {
    songIdx++;
  } else {
    songIdx = 0;
  }
  loadSong(songs[songIdx]);
  playSong();
  console.log("current song number " + songIdx);
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progPercent = (currentTime * 100) / duration;
  console.log(currentTime + " " + duration);
  const stdDur = changeToTime(duration);
  const stdCurrTime = changeToTime(currentTime);
  songDuration.innerText = `${stdCurrTime} / ${stdDur}`;
  console.log(songDuration.innerText);
  progress.style.width = `${progPercent}%`;
}

function changeToTime(time) {
  let t = time.toString();
  var second = t.split(".")[0];
  var minute = parseInt(parseInt(second) / 60);
  var sec = parseInt(parseInt(second) % 60);
  return minute + ":" + sec;
}

//Event Listener
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  console.log("click play button");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// change song event
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
