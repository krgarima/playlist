"use client";

import videoDetails from "../public/data/videoDetails.json";
import React, { useState, createContext } from "react";

const videoContext = createContext<any>(null);

const VideoContextProvider = ({ children }: any) => {
  const [videoList, setVideoList] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  return (
    <div>
      <videoContext.Provider
        value={{
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
