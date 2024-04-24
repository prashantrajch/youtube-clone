import React from "react";
import YoutubeContext from "./ContextCreate";

export default function YoutubeState({ children }) {
  return (
    <YoutubeContext.Provider value={"hellow"}>
      {children}
    </YoutubeContext.Provider>
  );
}
