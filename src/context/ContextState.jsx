import React, { useState, useEffect } from "react";
import YoutubeContext from "./ContextCreate";
import { fetchDataFromApi } from "../data";
import { useNavigate } from "react-router-dom";

function getLocalStorage() {
  let localTheme = localStorage.getItem("theme");
  if (localTheme) {
    return JSON.parse(localStorage.getItem("theme"));
  } else {
    return "light";
  }
}

export default function YoutubeState({ children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [theme, setTheme] = useState(getLocalStorage());
  const [selectedCategories, setSelectedCategories] = useState("New");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error,setError]= useState(null);
  const navigate = useNavigate()

  //using for handle mobile and large nav
  function handleMobileNav() {
    setMobileNav(!mobileNav);
  }
  
  function handelSidenav(){
    setSidebar(!sidebar);
    setMobileNav(false);
  }

  // using for handle nav item or selectedCategories
  function handleNavItem(name, type) {
    setMobileNav(!mobileNav);
    if (type == "menu") {
      return;
    }
    setSelectedCategories(name);
    navigate('/')
    document.querySelector('title').innerText = 'YouTube'

  }

  async function fetchCategoriesData(){
    setLoading(true)
    try{
      const result = await fetchDataFromApi(`search/?q=${selectedCategories}`);
      setApiData(result.contents)
      setLoading(false)
    }
    catch(err){
      // console.log(err);
      setLoading(false)
      setError(err)
    }
    // localStorage.setItem('apiData',JSON.stringify(result));
  }

  useEffect(() => {
    fetchCategoriesData()
  },[selectedCategories])


  //By default checking theme or your computer
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // using for dark and light mode
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);



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
        loading,
        setLoading,
        handelSidenav,
        error,
        setError
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
