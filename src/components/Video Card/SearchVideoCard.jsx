import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdMusicNote } from "react-icons/md";
import { value_converter } from "../../data";

export default function SearchVideoCard({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex max-sm:flex-col sm:pr-5">
        <div className="relative w-full xl:max-w-[500px] md:max-w-[320px] md:min-w-[320px] md:rounded-xl  overflow-hidden ">
          <img
            src={video?.thumbnails[0].url}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col sm:ml-3 max-sm:mt-2">
          <span className="text-lg md:text-xl font-[400] line-clamp-2 ">{video?.title}</span>
          <div className="flex text-sm text-[#606060] dark:text-white ">
            <span>{value_converter(video?.stats?.views)} views</span>
            <span className="mx-1">&#8226;</span>
            <span>{video?.publishedTimeText}</span>
          </div>
          <div className="flex gap-2 items-center my-2">
            <div className="flex h-7 w-7 rounded-full overflow-hidden">
              <img
                src={video?.author?.avatar[0]?.url}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xs font-semibold text-[#606060] dark:text-white flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill
                  title="Verified Channel"
                  className="text-[#606060] dark:text-white text-sm ml-1 "
                />
              )}
              {video?.author?.badges[0]?.type === "OFFICIAL_ARTIST_CHANNEL" && (
                <MdMusicNote
                  title="Official Artist"
                  className="text-[#606060] dark:text-white text-sm ml-1 "
                />
              )}
            </span>
          </div>
          <p className="text-sm hidden sm:block text-[#606060] dark:text-white ">
            {video?.descriptionSnippet}
          </p>
          <div className="mt-2">
            {video.badges.map((badge) => (
              <span className="bg-slate-200/60 dark:bg-white/[0.5] font-medium text-xs p-1 mr-2">
                {badge && badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
