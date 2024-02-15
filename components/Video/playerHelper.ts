const handleFullScreen = (videoRef) => {
  if (videoRef.current.requestFullscreen) {
    videoRef.current.requestFullscreen();
  } else if (videoRef.current.mozRequestFullScreen) {
    /* Firefox */
    videoRef.current.mozRequestFullScreen();
  } else if (videoRef.current.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    videoRef.current.webkitRequestFullscreen();
  } else if (videoRef.current.msRequestFullscreen) {
    /* IE/Edge */
    videoRef.current.msRequestFullscreen();
  }
};

const handlePause = (selectedVideo, videoRef) => {
  // Store playback position when video is paused
  localStorage.setItem(
    selectedVideo.id,
    videoRef.current.currentTime.toString()
  );
};

const handleVideoEnd = (selectedVideo) => {
  // Clear playback position when video ends
  localStorage.removeItem(selectedVideo.id);
};

// KEYBOARD CONTROLS

const togglePlayPause = (videoRef) => {
  if (videoRef.current.paused) {
    videoRef.current.play();
  } else {
    videoRef.current.pause();
  }
};

const seekForward = (videoRef) => {
  videoRef.current.currentTime += 10; // Seek forward 10 seconds
};

const seekBackward = (videoRef) => {
  videoRef.current.currentTime -= 10; // Seek backward 10 seconds
};

const increaseVolume = (videoRef) => {
  if (videoRef.current.volume < 1) {
    videoRef.current.volume += 0.1;
  }
};

const decreaseVolume = (videoRef) => {
  if (videoRef.current.volume > 0) {
    videoRef.current.volume -= 0.1;
  }
};

export {
  togglePlayPause,
  seekForward,
  seekBackward,
  increaseVolume,
  decreaseVolume,
  handleFullScreen,
  handlePause,
  handleVideoEnd,
};
