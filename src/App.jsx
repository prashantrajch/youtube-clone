import React, { useContext } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import SearchResult from "./page/SearchResult/SearchResult";
import VideoDetail from "./page/VideoDetail/VideoDetail";

export default function App() {
  return (
    <div className="dark:bg-[#303030] dark:text-white h-screen">
      <Header />
      <Routes>
        <Route exact path="/"  element={<Home /> } />
        <Route path="/result/:search_query"  element={<SearchResult /> } />
        <Route path="/"  element={<VideoDetail /> } />
      </Routes>
    </div>
  );
}
