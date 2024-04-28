import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeContext from "../../context/ContextCreate";
import { fetchDataFromApi, value_converter } from "../../data";
import SideNavbar from "../../components/Navbar/SideNavbar";
import YouTubePlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import SuggestionnVideoCard from "../../components/Video Card/SuggestionnVideoCard";
import { MdMusicNote } from "react-icons/md";

export default function VideoDetail() {
  const [videoData, setVideoData] = useState([]);
  const [suggestionVideoData, setSuggestionVideoData] = useState([]);
  const { id } = useParams();
  const { setLoading, loading,setMobileNav } = useContext(YoutubeContext);

  useEffect(() => {
    fetchVideoDetailsApi();
    fetchSuggestionVideoApi();
    document.querySelector("title").innerText = `YouTube`;
  }, [id]);

  useEffect(() => {
    setMobileNav(false)
  },[])

  async function fetchVideoDetailsApi() {
    setLoading(true);
    const result = await fetchDataFromApi(`video/details/?id=${id}`);
    setVideoData(result);
    setLoading(false);
  }


  async function fetchSuggestionVideoApi() {
    setLoading(true);
    const result = await fetchDataFromApi(`video/related-contents/?id=${id}`);
    setSuggestionVideoData(result);
    setLoading(false);
  }
  return (
    <div className=" min-h-[calc(100vh-56px)]">
      <SideNavbar />
      {!loading && (
        <div className="flex justify-center flex-row">
          <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
            <div className="video-section flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-500px)] px-4 py-3 lg:py-4 overflow-y-auto ">
              <div className="h-[200px] sm:h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
                <YouTubePlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  controls
                  width={"100%"}
                  height={"100%"}
                  style={{ backgroundColor: "#000000" }}
                  playing={true}
                />
              </div>
              <div className="dark:text-white font-semibold text-md md:text-xl mt-2 line-clamp-2">
                {videoData?.title}
              </div>
              <div className="flex justify-between flex-col md:flex-row mt-2">
                <div className="flex">
                  <div className="flex gap-2 items-center ">
                    <div className="flex items-center w-11 h-11 rounded-full overflow-hidden">
                      <img
                        src={videoData?.author?.avatar[0]?.url}
                        alt="profile image"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="dark:text-white text-md font-semibold flex items-center">
                        {videoData?.author?.title}
                        {videoData?.author?.badges[0]?.type ==
                          "VERIFIED_CAHNNEL" && (
                          <BsFillCheckCircleFill title="Verified Channel" className="text-sm ml-1 text-[#606060] dark:text-white" />
                        )}
                        {videoData?.author?.badges[0]?.type ===
                          "OFFICIAL_ARTIST_CHANNEL" && (
                          <MdMusicNote
                            title="Official Artist"
                            className="text-[#606060] dark:text-white text-sm ml-1 "
                          />
                        )}
                      </div>
                      <div className="dark:text-white text-gray-800 text-xs">
                        {videoData?.author?.stats?.subscribersText}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 dark:text-white mt-4 md:mt-0">
                  <div className="flex items-center justify-center px-4 h-9 rounded-3xl bg-slate-200/60 hover:bg-slate-200 cursor-pointer dark:bg-white/[0.15]">
                    <AiOutlineLike className="text-xl dark:text-white mr-2" />
                    {value_converter(videoData?.stats?.likes)}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg">
                  {value_converter(videoData?.stats?.comments)} Comments{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col py-4 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
              {suggestionVideoData?.contents?.map((item, index) => {
                if (item?.type !== "video") return false;
                return <SuggestionnVideoCard key={index} video={item?.video} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
