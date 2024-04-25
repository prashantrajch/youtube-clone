import React from "react";

export default function RoundIcon({ IconElement, bgShow, darkMode, action }) {
  return (
    <div
      className={`p-2 rounded-full cursor-pointer flex items-center justify-center ${
        darkMode == "dark"
          ? "dark:bg-[#303030] text-white dark:hover:bg-slate-500 "
          : "text-black hover:bg-slate-200"
      } ${bgShow && "bg-slate-200/50 dark:bg-slate-400"}`}
      onClick={action}
    >
      <IconElement className="md:text-2xl text-lg" />
    </div>
  );
}
