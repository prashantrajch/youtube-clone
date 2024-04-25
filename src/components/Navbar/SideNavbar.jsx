import React, { useContext } from "react";
import YoutubeContext from "../../context/ContextCreate";
import { Link } from "react-router-dom";
import RoundIcon from "./../Header/RoundIcon";
import {
  yt_black_logo,
  yt_white_logo,
  yt_mobile_logo,
  FiMenu,
} from "../Header/IconsData";
import { categories } from "./NavData";
import NavItem from "./NavItem";

export default function SideNavbar() {
  const { mobileNav, theme, handleMobileNav,selectedCategories,handleNavItem } = useContext(YoutubeContext);


  return (
    <div
      className={`w-[240px] h-full fixed top-0 left-0 z-10 bg-white dark:bg-[#303030] ${
        mobileNav ? "translate-x-0" : "-translate-x-[240px]"
      }`}
    >
      <div className="h-14 flex items-center justify-between px-4 md:px-5 dark:bg-[#303030]">
        <div className="left-side flex items-center md:gap-4 gap-2">
          <div className="menu-icon">
            <RoundIcon
              IconElement={FiMenu}
              bgShow={false}
              darkMode={theme}
              action={handleMobileNav}
            />
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
      </div>
      <div className="py-4 h-[86vh] overflow-hidden hover:overflow-y-auto ">
        <div className="px-4">
          {categories.map((item) => {
            return (
              <NavItem
                key={item.name}
                Icon={item.icon}
                text={item.type == 'home' ? 'Home' : item.name }
                action={() => {
                  handleNavItem(item.name, item.type);
                }}
                selectedColor={selectedCategories == item.name ? 'bg-[#303030] text-white dark:bg-white/[0.15] text-black' : ''}
                divider={item.divider}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
