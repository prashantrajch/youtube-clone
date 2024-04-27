import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { value_converter } from "../../data";

export default function VideoCard({video}) {

  return (
    <Link to={`/video/${video?.videoId}`} className="contents">
    <div className="flex flex-col w-full md:w-[calc(100%/2-1em)] xl:w-[calc(100%/3-1em)]">
      <div className="relative h-48 md:h-56 md:rounded-xl overflow-hidden ">
        <img
          src={video?.thumbnails[0].url}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex dark:text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <img
              src={video?.author?.avatar[0]?.url}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col ml-3 overflow-hidden pr-6">
          <span className="font-medium line-clamp-2 leading-5">
            {video?.title}
          </span>
          <div className="mt-1">
            <span className="text-sm font-semibold text-[#606060] dark:text-white flex items-center">
              {video?.author.title}
              {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && <BsFillCheckCircleFill className="text-[#606060] dark:text-white text-sm ml-1 " /> }
            </span>
            <div className="flex text-sm text-[#606060] dark:text-white truncate overflow-hidden ">
              <span>{value_converter(video?.stats.views)} views</span>
              <span className="mx-1">&#8226;</span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
