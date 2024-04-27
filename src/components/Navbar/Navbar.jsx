import React, { useContext } from "react";
import YoutubeContext from "../../context/ContextCreate";
import { categories } from "./NavData";
import NavItem from "./NavItem";
import MobileNavbar from "./MobileNavbar";
import SideNavbar from "./SideNavbar";

export default function Navbar() {
  const { selectedCategories, handleNavItem,sidebar } =
    useContext(YoutubeContext);

  return (
    <div className="py-4 md:px-4">
      <div className="overflow-hidden h-[calc(100%-56px)] hover:overflow-y-auto md:fixed z-10">
        <div className="hidden xl:block ">
          {categories.map((item) => {
            return sidebar  ? (
              <NavItem
                key={item.name}
                text={''}
                Icon={item.icon}
                action={() => {
                  handleNavItem(item.name, item.type);
                }}
                selectedColor={
                  selectedCategories == item.name
                    ? "bg-[#303030] text-white dark:bg-white/[0.15] text-black"
                    : ""
                }
                divider={item.divider}
              />
            ) : (
              <NavItem
                key={item.name}
                text={item.type == "home" ? "Home" : item.name}
                Icon={item.icon}
                action={() => {
                  handleNavItem(item.name, item.type);
                }}
                selectedColor={
                  selectedCategories == item.name
                    ? "bg-[#303030] text-white dark:bg-white/[0.15] text-black"
                    : ""
                }
                divider={item.divider}
              />
            );
          })}
        </div>
        <div className="block xl:hidden ">
        <div className="hidden md:block">
          <MobileNavbar />
        </div>
          <SideNavbar />
        </div>
      </div>
    </div>
  );
}
