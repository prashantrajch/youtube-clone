import React, { useEffect, useState } from "react";
import yt_black_logo from "./../../assets/youtube-black-logo.png";
import yt_mobile_logo from "./../../assets/yt-logo-mobile.png";
import yt_white_logo from "./../../assets/yt-white-logo.png";
import Profile_Image from "./../../assets/Profile Picture BG Blue.png";
import { Link, json } from "react-router-dom";
import RoundIcon from "./RoundIcon";
import { FiMenu } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import { SlBell } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineDarkMode,MdMic } from "react-icons/md";

export default function Header() {
  const [theme, setTheme] = useState(getLocalStorage());

  function handleDarkMode() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  function getLocalStorage(){
    let localTheme = localStorage.getItem('theme');
    if(localTheme){
      return JSON.parse(localStorage.getItem('theme'))
    }
    else{
      return 'light';
    }
  }
  
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem('theme',JSON.stringify(theme))
  }, [theme]);

  //By default behaviour checking
  // useEffect(()=> {
  //   if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  //     setTheme('dark');
  //   }
  //   else{
  //     setTheme('light');
  //   }
  // },[])


  return (
    <div className="h-14 flex items-center justify-between px-4 md:px-5 dark:bg-black">
      <div className="left-side flex items-center md:gap-4 gap-2">
        <div className="menu-icon">
          <RoundIcon IconElement={FiMenu} bgShow={false} darkMode={theme} />
        </div>
        <Link to={"/"}>
          <div className="logo flex items-center">
            {theme == "dark" ? (
              <img
                src={yt_white_logo}
                alt="Logo"
                className="h-full hidden md:block w-[90px]"
              />
            ) : (
              <img
                src={yt_black_logo}
                alt="Logo"
                className="h-full hidden md:block w-[90px]"
              />
            )}
            <img
              src={yt_mobile_logo}
              alt="Logo"
              className="h-full md:hidden w-[36px] "
            />
          </div>
        </Link>
      </div>
      <form action="/search/">
        <div className="flex items-center gap-4">
          <div className="flex group items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 dark:border-[#303030]">
            <div className="w-12 items-center justify-center hidden group-focus-within:md:flex dark:text-white">
              <IoIosSearch size={22} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] dark:text-white"
            />
          </div>
          <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 rounded-r-3xl bg-slate-100 hover:bg-slate-200 dark:border-[#303030] dark:bg-white/[0.1]">
            <IoIosSearch size={22} className="dark:text-white" />
          </button>
          </div>
          <div className="md:block hidden">
            <RoundIcon IconElement={MdMic} darkMode={theme} bgShow={true} />
          </div>
        </div>
      </form>
      <div className="right-side flex items-center gap-2 md:gap-4">
        <button onClick={handleDarkMode}>
          <RoundIcon
            IconElement={theme == 'dark' ? WiDaySunny : MdOutlineDarkMode }
            darkMode={theme}
            bgShow={true}
            darkBtn={true}
          />
        </button>
        <div className="max-md:hidden">
        <RoundIcon IconElement={RiVideoAddLine} bgShow={false} darkMode={theme} />

        </div>
        <div className="max-md:hidden">
        <RoundIcon IconElement={SlBell} bgShow={false} darkMode={theme} />
        </div>
        <img
          src={Profile_Image}
          alt="profile image"
          className="object-cover w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}
