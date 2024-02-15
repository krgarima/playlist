"use client";

import { videoContext } from "@/context/video-context";
import React, { useContext, useEffect } from "react";
import {
  decreaseVolume,
  handleFullScreen,
  handlePause,
  handleVideoEnd,
  increaseVolume,
  seekBackward,
  seekForward,
  togglePlayPause,
} from "./playerHelper";

const VideoPlayer = () => {
  const { videoRef, selectedVideo } = useContext(videoContext);

  useEffect(() => {
    // Retrieve playback position from localStorage
    const savedPosition = localStorage.getItem(selectedVideo.id);
    if (savedPosition) {
      videoRef.current.currentTime = parseFloat(savedPosition);
      // setPlaybackPosition(parseFloat(savedPosition));
    }
  }, [selectedVideo.id]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Handle keyboard shortcuts
      switch (event.key) {
        case " ":
          togglePlayPause(videoRef);
          break;
        case "ArrowRight":
          seekForward(videoRef);
          break;
        case "ArrowLeft":
          seekBackward(videoRef);
          break;
        case "ArrowUp":
          increaseVolume(videoRef);
          break;
        case "ArrowDown":
          decreaseVolume(videoRef);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="sm:w-full md:w-[70%] h-full mb-10 md:mb-0">
      <video
        className="w-full h-[88%]"
        autoPlay
        ref={videoRef}
        src={`assets/videos/${selectedVideo?.src}`}
        controls
        onEnded={() => handleVideoEnd(selectedVideo)}
        onPause={() => handlePause(selectedVideo, videoRef)}
        onClick={() => handleFullScreen(videoRef)}
      />
      <div className="w-full h-[12%] py-2 px-2 bg-white ">
        <p className="text-2xl font-medium">{selectedVideo?.title}</p>
        <p className="text-sm font-light">
          {selectedVideo?.views} | {selectedVideo?.creator} |{" "}
          {selectedVideo?.date}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
