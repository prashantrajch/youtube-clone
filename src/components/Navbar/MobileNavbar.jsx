import React, { useContext } from 'react'
import { categories } from "./NavData";
import NavItem from "./NavItem";
import YoutubeContext from '../../context/ContextCreate';

export default function MobileNavbar() {

  const {selectedCategories,setSelectedCategories} = useContext(YoutubeContext);

    function handleNavItem(name,type){
      if(type == 'menu'){
        return
      }
      setSelectedCategories(name);
    }

  return (
    <>
      {categories.map((item) => {
          return (
            <NavItem
              key={item.name}
              Icon={item.icon}
              text={''}
              action={()=> {
                handleNavItem(item.name,item.type)
              }}
              selectedColor={selectedCategories == item.name ? 'bg-[#303030] text-white dark:bg-white/[0.15] text-black' : ''}
              divider={item.divider}
            />
          );
        })}
    </>
  )
}
