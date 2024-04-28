import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RoundIcon from "./RoundIcon";
import {
  FiMenu,
  RiVideoAddLine,
  SlBell,
  IoIosSearch,
  WiDaySunny,
  MdOutlineDarkMode,
  MdMic,
  yt_black_logo,
  yt_mobile_logo,
  yt_white_logo,
  Profile_Image,
} from "./IconsData";
import YoutubeContext from "../../context/ContextCreate";
import SideNavbar from "../Navbar/SideNavbar";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const {
    setTheme,
    theme,
    handleMobileNav,
    setSelectedCategories,
    handelSidenav,
  } = useContext(YoutubeContext);

  const navigate = useNavigate();

  function handleDarkMode() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue !== "") {
      navigate(`/result/${searchValue}`);
      setSelectedCategories("");
    }
  }

  const { pathname } = useLocation();
  const page = pathname.split("/").filter(Boolean)[0];

  return (
    <div className="h-14 flex items-center justify-between px-2 md:px-4 lg:px-5 bg-white dark:bg-[#303030] sticky top-0 z-10">
      <div className="left-side flex items-center md:gap-4 gap-2">
        <div className="menu-icon">
          <div className="hidden xl:block">
            {page == "video" ? (
              <RoundIcon
                IconElement={FiMenu}
                bgShow={false}
                darkMode={theme}
                action={handleMobileNav}
              />
            ) : (
              <RoundIcon
                IconElement={FiMenu}
                bgShow={false}
                darkMode={theme}
                action={handelSidenav}
              />
            )}
          </div>
          <div className="block xl:hidden">
            <RoundIcon
              IconElement={FiMenu}
              bgShow={false}
              darkMode={theme}
              action={handleMobileNav}
            />
          </div>
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
                className="h-full hidden md:block min-w-[90px] max-w-[90px] "
              />
            )}
            <img
              src={yt_mobile_logo}
              alt="Logo"
              className="h-full md:hidden min-w-[36px] max-w-[36px] "
            />
          </div>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="max-sm:w-[44%]">
        <div className="flex items-center gap-4">
          <div className="flex group items-center ">
            <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 dark:border-white/50 overflow-hidden">
              <div className="w-12 items-center justify-center hidden group-focus-within:md:flex dark:text-white">
                <IoIosSearch size={22} />
              </div>
              <input
                type="text"
                placeholder="Search"
                name="search_query"
                className=" outline-none pr-5 pl-5 md:pl-0  md:group-focus-within:pl-0 w-[100%] md:w-64 lg:w-[500px] dark:text-white dark:bg-[#303030] "
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <button className="min-w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 rounded-r-3xl bg-slate-100 hover:bg-slate-200 dark:border-white/50 dark:bg-white/[0.1]">
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
            IconElement={theme == "dark" ? WiDaySunny : MdOutlineDarkMode}
            darkMode={theme}
            bgShow={true}
            darkBtn={true}
          />
        </button>
        <div className="xl:block hidden">
          <RoundIcon
            IconElement={RiVideoAddLine}
            bgShow={false}
            darkMode={theme}
          />
        </div>
        <div className="xl:block hidden">
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
