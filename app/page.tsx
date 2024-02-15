"use client";

import { VideoContextProvider } from "@/context/video-context";
import Home from "@/pages/Home";

export default function App() {
  return (
    <VideoContextProvider>
      <Home />
    </VideoContextProvider>
  );
}
