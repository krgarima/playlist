"use client";

import React, { useContext, useRef } from "react";
import VideoListItem from "./VideoListItem";
import { videoContext } from "@/context/video-context";
import { VideoItem } from "./interfaces";

const Playlist = () => {
  const { videoList }: any = useContext(videoContext);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  return (
    <div className="sm:w-full md:w-[30%] h-full border-l px-8 py-6 overflow-auto md:fixed right-0 flex flex-col gap-4 pb-28">
      <h2 className="text-2xl font-medium">Watch Next</h2>
      <hr className="bg-slate-300" />

      {videoList.map((item: VideoItem, index: number) => (
        <VideoListItem
          key={index}
          item={item}
          index={index}
          dragItem={dragItem}
          dragOverItem={dragOverItem}
        />
      ))}
    </div>
  );
};

export default Playlist;
