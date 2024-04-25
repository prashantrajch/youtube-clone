import React, { useState, useEffect } from "react";
import YoutubeContext from "./ContextCreate";

export default function YoutubeState({ children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const[sidebar,setSidebar] = useState(false)
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
    setSidebar(!sidebar)
  }

  function handleNavItem(name, type) {
    setMobileNav(!mobileNav)
    if(type == 'menu'){
      return
    }
    setSelectedCategories(name)
  }




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
        handleNavItem,
        sidebar
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
