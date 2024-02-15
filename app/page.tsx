"use client";

import Navbar from "@/components/Navbar";
import Playlist from "@/components/Video/Playlist";
import VideoPlayer from "@/components/Video/VideoPlayer";
import { VideoContextProvider } from "@/context/video-context";

export default function App() {
  return (
    <VideoContextProvider>
      <div className="h-screen w-screen flex flex-col ">
        <Navbar />
        <main className="flex w-full flex-col md:flex-row flex-1 pt-16 overflow-hidden px-6">
          <VideoPlayer />
          <Playlist />
        </main>
      </div>
    </VideoContextProvider>
  );
}
