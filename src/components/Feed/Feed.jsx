import React, { useContext } from "react";
import VideoCard from "../Video Card/VideoCard";
import YoutubeContext from "../../context/ContextCreate";

export default function Feed() {
  const { sidebar, apiData, loading } = useContext(YoutubeContext);

  return (
    <div
      className={` max-sm:px-2 flex flex-wrap content-baseline sm:gap-x-4 gap-y-4 sm:gap-y-8 ${
        sidebar ? "xl:w-[calc(100%-76px)]" : "xl:w-[calc(100%-210px)]"
      } `}
    >
      {!loading &&
        apiData.map((item) => {
          if (item.type !== "video") return false;
          return <VideoCard key={item?.video?.videoId} video={item?.video} />;
        })}
    </div>
  );
}
