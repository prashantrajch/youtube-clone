import React from "react";

export default function NavItem({ text, Icon, selectedColor, action,divider }) {
  // console.log(selectedColor,text);
  return (
    <>
    <div
      className={
        "dark:text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg dark:hover:bg-white/[0.15] hover:bg-[#303030] hover:text-white " +
        selectedColor
      }
      onClick={action}
    >
      <span className={`text-xl ${text == '' ? '' : 'mr-5' }`}> <Icon /> </span>
      {text}
    </div>
    {
      divider && <hr className="my-5 dark:border-white/[0.2] border-black" />
    }
    </>
  );
}
