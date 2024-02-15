"use client";

import videoDetails from "../public/data/videoDetails.json";
import React, { useState, createContext, useRef } from "react";

const videoContext = createContext({});

const VideoContextProvider = ({ children }) => {
  const videoRef = useRef(null);
  const [videoList, setVideoList] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  return (
    <div>
      <videoContext.Provider
        value={{
          videoRef,
          selectedVideo,
          setSelectedVideo,
          videoList,
          setVideoList,
        }}
      >
        {children}
      </videoContext.Provider>
    </div>
  );
};

export { VideoContextProvider, videoContext };
