/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "routes.js";
import SidebarSelect from "./components/SidebarSelect";

const Sidebar = ({ open, onClose }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <div
      className={`sm:none duration-175 bg-white linear px-5 fixed !z-50 flex min-h-full flex-col glass pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 top-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-8 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>
      <div className="flex-shrink-0 mt-5 mx-5">
        <img
          className="h-7 "
          src="https://img.logoipsum.com/297.svg"

        />
      </div>
      <SidebarSelect/>
      <div class="mt-[58px] mb-8 h-px " />


      {isSmallScreen ? (
        <ul className="mb-auto pt-1" onClick={onClose}>
          <Links routes={routes} />
        </ul>
      ) : 
        <ul className="mb-auto pt-1" >
          <Links routes={routes} />
        </ul>
      }


    </div>
  );
};

export default Sidebar;
