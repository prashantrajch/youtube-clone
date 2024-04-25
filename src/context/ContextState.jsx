import React, { useState, useEffect } from "react";
import YoutubeContext from "./ContextCreate";

export default function YoutubeState({ children }) {
  const [mobileNav, setMobileNav] = useState(true);
  const [theme, setTheme] = useState(getLocalStorage());
  const [selectedCategories, setSelectedCategories] = useState("New");

  function getLocalStorage() {
    let localTheme = localStorage.getItem("theme");
    if (localTheme) {
      return JSON.parse(localStorage.getItem("theme"));
    } else {
      return "light";
    }
  }

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function handleMobileNav() {
    setMobileNav(!mobileNav);
  }

  function handleNavItem(name, type) {
    console.log('im cliced')
    if(type == 'menu'){
      return
    }
    setSelectedCategories(name)
  }

  useEffect(() =>{
    console.log('hello')
  }, [selectedCategories])



  return (
    <YoutubeContext.Provider
      value={{
        mobileNav,
        setMobileNav,
        theme,
        setTheme,
        handleMobileNav,
        selectedCategories,
        setSelectedCategories,
        handleNavItem
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
