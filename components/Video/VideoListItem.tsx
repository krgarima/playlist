"use client";

import { videoContext } from "@/context/video-context";
import React, { useContext, useRef } from "react";
import Image from "next/image";

const VideoListItem = ({ item, index, dragItem, dragOverItem }) => {
  const { setSelectedVideo, videoList, setVideoList } =
    useContext(videoContext);

  const handleSort = () => {
    const videoClone = [...videoList];

    const temp = videoClone[dragItem.current];
    videoClone[dragItem.current] = videoClone[dragOverItem.current];
    videoClone[dragOverItem.current] = temp;

    dragItem.current = null;
    dragOverItem.current = null;

    setVideoList(videoClone);
  };

  return (
    <li
      className="list-none h-28 w-full flex gap-x-2 relative"
      draggable
      onDragStart={(e) => (dragItem.current = index)}
      onDragEnter={(e) => (dragOverItem.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
    >
      <Image
        className="absolute right-0 top-2 cursor-pointer"
        width={16}
        height={16}
        src={"/assets/icons/drag.svg"}
        alt="dragger"
      />
      <video
        className="h-full w-1/2 cursor-pointer"
        key={index}
        src={`/assets/videos/${item.src}`}
        // controls
        poster={`/assets/thumbnails/${item.thumbnail}`}
        onClick={() => setSelectedVideo(item)}
      />
      <div className="w-1/2 h-full  p-2 ">
        <p className="text-gray-600">
          {item?.views} | {item?.date}
        </p>
        <h3 className="font-medium">{item?.title}</h3>
        <h4 className="">{item?.creator}</h4>
      </div>
    </li>
  );
};

export default VideoListItem;
