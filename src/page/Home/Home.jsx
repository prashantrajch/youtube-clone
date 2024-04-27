import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/Feed/Feed";
import YoutubeContext from "../../context/ContextCreate";

export default function Home() {
  const { sidebar, loading } = useContext(YoutubeContext);
  useEffect(() => {
    document.querySelector("title").innerText = "YouTube";
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-56px)]">
      <div
        className={`sm:min-w-[76px] ${
          sidebar ? "xl:w-[76px]" : "xl:w-[210px]"
        }`}
      >
        <Navbar />
      </div>
      {!loading && <Feed />}
    </div>
  );
}
