import React, { useState, useEffect } from "react";
import YoutubeContext from "./ContextCreate";

export default function YoutubeState({ children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [theme, setTheme] = useState(getLocalStorage());
  const [selectedCategories, setSelectedCategories] = useState("New");
  const [apiData, setApiData] = useState({
    thumbnail:
      "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mi Amor (Lyrics) - Sharn, 40k & The Paul",
    avatar: "https://picsum.photos/400/400?random=1",
    published: "1 Hour",
    author_title: "BBC News Hindi",
    views: 567000,
  });

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
    setSidebar(!sidebar);
  }

  function handleNavItem(name, type) {
    setMobileNav(!mobileNav);
    if (type == "menu") {
      return;
    }
    setSelectedCategories(name);
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
        sidebar,
        apiData,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
