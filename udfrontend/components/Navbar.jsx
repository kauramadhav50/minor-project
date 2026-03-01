import { IoChatbubbleEllipses } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  function handleclick() {
    alert("clicked");
  }
  return (
    <div className="flex items-center w-full justify-center gap-2 bg-blue-200 md:hidden">

      {/* Logo */}
      <div>
        <img src="/logo.png" alt="logo" className="h-14" />
      </div>

      {/* Search Bar */}
      <div>
        <input
          type="search"
          placeholder="Search"
          className="rounded-xl w-65 px-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
        />
      </div>

      {/* Chat Icon */}
      <div className="text-2xl cursor-pointer" onClick={handleclick}>
        

        <IoChatbubbleEllipses />
        
      </div>

    </div>
  );
};

export default Navbar;