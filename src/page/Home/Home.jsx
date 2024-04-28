import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/Feed/Feed";
import YoutubeContext from "../../context/ContextCreate";

export default function Home() {
  const { sidebar, loading, error } = useContext(YoutubeContext);
  useEffect(() => {
    document.querySelector("title").innerText = "YouTube";
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-56px)]">
      <div
        className={`md:min-w-[76px] ${
          sidebar ? "xl:w-[76px]" : "xl:w-[210px]"
        }`}
      >
        <Navbar />
      </div>
      {error ? <h3 className="flex items-center justify-center font-bold text-2xl px-12 text-center">{error}</h3> : !loading && <Feed />}
    </div>
  );
}
