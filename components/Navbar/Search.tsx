import React, { useContext, useState } from "react";
import videoDetails from "../../public/data/videoDetails.json";
import { videoContext } from "@/context/video-context";
import Image from "next/image";

const Search = () => {
  const { videoList, setSelectedVideo } = useContext(videoContext);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [videoSuggestions, setVideoSuggestions] = useState(videoDetails);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
    setShowSuggestions(true);
    setVideoSuggestions(
      videoList?.filter((video) =>
        video.title.toLowerCase().match(e.target.value.toLowerCase())
      )
    );
    if (e.target.value?.length === 0) {
      setVideoSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelection = (item) => {
    setSelectedVideo(item);
    setShowSuggestions(false);
    setSearchKeyword("");
  };

  return (
    <div className="w-5/6 md:w-1/2 h-3/5 mx-2 flex justify-center items-center relative">
      {/* INPUT */}
      <input
        type="text"
        placeholder="Search"
        className="px-2 w-full h-full border-2 border-solid border-gray-300 rounded"
        value={searchKeyword}
        onChange={(e) => handleChange(e)}
      />
      {/* ICON */}
      <Image
        className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        width={18}
        height={18}
        src={"/assets/icons/search.svg"}
        alt="Search"
      />
      {/* SUGGESTIONS  */}
      <div className="absolute top-10 z-20 bottom-0 w-full min-h-1">
        {showSuggestions &&
          (videoSuggestions.length > 0 ? (
            videoSuggestions.map((item, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer bg-white hover:bg-gray-100 "
                onClick={() => handleSelection(item)}
              >
                {item.title}
              </div>
            ))
          ) : (
            <p className="p-2 bg-white">No suggestions</p>
          ))}
      </div>
    </div>
  );
};

export default Search;
