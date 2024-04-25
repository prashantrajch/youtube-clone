import React, { useContext } from "react";
import YoutubeContext from "../../context/ContextCreate";
import { categories } from "./NavData";
import NavItem from "./NavItem";
import MobileNavbar from "./MobileNavbar";
import SideNavbar from "./SideNavbar";

export default function Navbar() {
  const { mobileNav, 
    selectedCategories,
    handleNavItem } =
    useContext(YoutubeContext);

  return (
    <div className="py-4 flex">
      <div className="px-4 overflow-hidden h-[85vh] hover:overflow-y-auto">
        <div className="hidden xl:block ">
          {categories.map((item) => {
            return (
              <NavItem
                key={item.name}
                text={
                  mobileNav ? (item.type == "home" ? "Home" : item.name) : ""
                }
                Icon={item.icon}
                action={() => {
                  handleNavItem(item.name, item.type);
                }}
                selectedColor={selectedCategories == item.name ? 'bg-[#303030] text-white dark:bg-white/[0.15] text-black' : ''}
                divider={item.divider}
              />
            );
          })}
        </div>
        <div className="block xl:hidden ">
          <MobileNavbar />
          <SideNavbar />
        </div>
      </div>
      <div className="feed">
        <p>Hello</p>
      </div>
    </div>
  );
}
