import React, { useContext } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import SearchResult from "./page/SearchResult/SearchResult";
import VideoDetail from "./page/VideoDetail/VideoDetail";
import YoutubeContext from "./context/ContextCreate";
import Loader from "./components/Loader/Loader";

export default function App() {
  const { loading } = useContext(YoutubeContext);
  return (
    <div className="dark:bg-[#303030] dark:text-white">
      {loading && <Loader />}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/result/:search_query" element={<SearchResult />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </div>
  );
}
