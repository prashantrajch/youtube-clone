import React from "react";

export default function RoundIcon({ IconElement, bgShow, darkMode,darkBtn }) {
  return (
    <div
      className={`p-2 rounded-full cursor-pointer flex items-center justify-center ${darkMode == 'dark' ? 'dark:bg-black text-white dark:hover:bg-slate-500 ' : 'bg-white text-black hover:bg-slate-200'} ${bgShow && 'bg-slate-200/50 dark:bg-slate-200/50'} ${darkBtn && 'bg-black/70 text-white dark:bg-white dark:text-black'} `}
    >
      <IconElement className="md:text-2xl text-lg" />
    </div>
  );
}
