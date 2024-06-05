import Logo from "./Logo";

import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="smallPhone:p-2 mx-auto my-1 flex h-16 max-w-screen-2xl items-center justify-between rounded-[15px] bg-purple text-white drop-shadow-2xl sm:px-3 phone:p-4">
      <Logo />

      {/* Desktop Navigation */}
      <div className="inline-flex justify-evenly tabletLandscape:text-[12px] tabletPortrait:hidden">
        <div className="m-3">Find Work</div>
        <div className="m-3">Find Talents</div>
        <div className="m-3">Articles</div>
        <div className="m-3">About Us</div>
        <div className="m-3">Contact Us</div>
      </div>

      {/* Mobile Navigation Button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMenu}
          className="smallPhone:p-2 smallPhone:rounded-[8px] rounded-[16px] bg-white p-3 text-black"
        >
          Menu
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="absolute right-0 top-16 z-50 mt-2 w-full rounded-[16px] bg-purple text-white shadow-lg md:hidden">
          <div className="flex flex-col items-start p-4">
            <div className="m-2">Find Work</div>
            <div className="m-2">Find Talents</div>
            <div className="m-2">Articles</div>
            <div className="m-2">About Us</div>
            <div className="m-2">Contact Us</div>
          </div>
        </div>
      )}

      {/* Login and Join Now */}
      <div className="inline-flex flex-none items-baseline tabletLandscape:text-[12px] tabletPortrait:hidden">
        <div className="px-3">Login</div>
        <button className="rounded-[16px] bg-white p-3 text-black">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default NavBar;
