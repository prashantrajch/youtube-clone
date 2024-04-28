import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeContext from "../../context/ContextCreate";
import Navbar from "../../components/Navbar/Navbar";
import SearchVideoCard from "../../components/Video Card/SearchVideoCard";
import { fetchDataFromApi } from "../../data";

export default function SearchResult() {
  const [searchResult, setSearchResult] = useState([]);
  const { search_query } = useParams();
  const { sidebar, setLoading, loading, error, setError } =
    useContext(YoutubeContext);

  async function fetchSearchDataFromApi() {
    setLoading(true);
    try {
      const result = await fetchDataFromApi(`search/?q=${search_query}`);
      setSearchResult(result.contents);
      setLoading(false);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSearchDataFromApi();
    document.querySelector(
      "title"
    ).innerText = `(${searchResult.length}) ${search_query} - YouTube`;
  }, [search_query]);

  return (
    <div className="flex min-h-[calc(100vh-56px)]">
      <div
        className={`sm:min-w-[76px] ${
          sidebar ? "xl:w-[76px]" : "xl:w-[210px]"
        }`}
      >
        <Navbar />
      </div>
      <div
        className={` mt-2 max-sm:px-2 flex flex-col gap-y-4 w-full overflow-hidden ${
          sidebar ? "xl:w-[calc(100%-76px)]" : "xl:w-[calc(100%-210px)]"
        } `}
      >
        {error ? (
          <h3 className="flex items-center justify-center font-bold text-2xl px-12 text-center">
            {error}
          </h3>
        ) : (
          !loading &&
          searchResult?.map((item) => {
            if (item?.type !== "video") return false;
            return (
              <SearchVideoCard key={item.video.videoId} video={item.video} />
            );
          })
        )}
      </div>
    </div>
  );
}
