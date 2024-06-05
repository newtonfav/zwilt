import { useState } from "react";
import avatar from "../assets/avatar.svg";
import avatar2 from "../assets/avatar2.svg";
// import avatar3 from "../assets/avatar3.svg";
import avatarThree from "../assets/avatar-three.svg";
import button from "../assets/button.svg";

function Home() {
  const [placeholder, setPlaceholder] = useState("Looking for design |");
  const [active, setActive] = useState("first");

  function handlePlaceholderFocus() {
    setPlaceholder("");
  }
  function handleMouseLeave() {
    setPlaceholder("Looking for design |");
  }

  // function handleHover() {}

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="smallPhone:mt-8 mb-8 mt-28 flex flex-col items-center text-center font-bold leading-none">
        <span className="inline-flex items-center text-[3.5rem] tabletPortrait:text-[2.8rem] phone:flex-col phone:text-[2rem]">
          Finding the right fit{" "}
          <span className="md:hidden phone:hidden">&nbsp;</span>
          <span className="relative ml-[4px] flex h-[57px] w-[86px] tabletPortrait:hidden">
            <img
              src={avatar}
              alt="avatar"
              className="absolute z-30 w-[86px] animate-slideLeft"
            />
            <img
              src={avatar2}
              alt="avatar"
              className="absolute -top-[0.05rem] left-[0.92rem] z-20"
            />
            <img
              src={avatarThree}
              alt="avatar"
              className="absolute -top-[0.1rem] left-[0.93rem] z-10 animate-slideRight"
            />
          </span>
          has
        </span>
        <span className="text-[55px] tabletPortrait:text-[45px] phone:text-[2rem]">
          never been easier.
        </span>
      </div>
      <div className="my-1 flex flex-col items-center text-xl phone:text-[1rem] phone:leading-[1.5]">
        <span className="text-center">
          With our rigorous pre-vetting process, you&apos;ll never have to
          <br className="phone:hidden" />
          worry about finding the ideal candidate ever again.
        </span>
      </div>

      <form
        action="#"
        className="my-8 flex w-4/12 items-stretch justify-center rounded-[15px] border-[1.5px] border-solid border-bcolor hover:ring-[1px] hover:ring-bcolor tabletPortrait:w-1/2 phone:w-9/12"
      >
        <input
          type="text"
          className="w-full rounded-[15px] p-5 focus:outline-none tabletPortrait:p-2"
          placeholder={placeholder}
          onMouseEnter={handlePlaceholderFocus}
          onMouseLeave={handleMouseLeave}
        />
        <button className="rounded-[15px] bg-yellow p-6 tabletPortrait:p-4">
          <img src={button} alt="button" className="w-7" />
        </button>
      </form>

      <div className="mb-36 mt-5 flex w-3/4 flex-col items-center rounded-[15px] bg-grey p-8 tabletPortrait:w-11/12 phone:p-4 phone:text-sm">
        <div className="mb-8 inline-flex flex-row justify-center rounded-[15px] bg-greydarker">
          <button
            className={`rounded-[15px] p-4 font-semibold phone:p-3 ${
              active === "first" ? "bg-green" : ""
            }`}
            onClick={() => setActive("first")}
          >
            IT & Development
          </button>
          <button
            className={`p-4 phone:p-3 ${active === "second" ? "rounded-[15px] bg-green font-semibold" : ""}`}
            onClick={() => setActive("second")}
          >
            Design and Creative
          </button>
        </div>

        <div className="w-10/12 text-sm">
          <ul className="grid grid-flow-col grid-rows-4 gap-6 text-greylight">
            <li>Python Developer</li>
            <li>Shopify Developer</li>
            <li className="font-bold text-black">MERN Stack Developer</li>
            <li>Full Stack Developer</li>
            <li>Data Scientist</li>
            <li>Frontend Developer</li>
            <li>Java Developer</li>
            <li>Swift Developer</li>
            <li>C++ Developer</li>
            <li>C# Developer</li>
            <li>React Native Developer</li>
            <li className="font-bold text-black">Explore More</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
