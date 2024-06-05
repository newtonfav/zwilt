/* eslint-disable react/prop-types */
import { useState } from "react";
import ScreenSize from "./helper/screenSize";

function ActionButton({
  logo,
  text,
  style,
  padding,
  borderRadius,
  textSize,
  disableAnimation,
  customScreen,
}) {
  const [isActive, setIsActive] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [windowWidth, windowHeight] = ScreenSize();

  if (windowWidth <= 639) disableAnimation = true;

  return (
    <button
      className={`inline-flex items-center ${style}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <span
        className={`mr-2 bg-black transition-all duration-300 ${customScreen} ease-in-out ${isActive && !disableAnimation ? "w-52" : "w-20"} ${borderRadius ? borderRadius : "rounded-[30px]"} ${padding ? padding : "p-[1.5rem]"} `}
      >
        <img
          src={logo}
          alt=""
          className={`w-5 ${isActive && !disableAnimation ? "translate-x-[700%]" : ""}`}
        />
      </span>
      <span
        className={`inline-flex text-nowrap font-bold transition-all duration-300 ${isActive && !disableAnimation ? `${text === "Join Now" ? "-translate-x-[200%]" : "-translate-x-[170%]"} text-white` : ""} ${textSize}`}
      >
        {text}
      </span>
    </button>
  );
}

export default ActionButton;
