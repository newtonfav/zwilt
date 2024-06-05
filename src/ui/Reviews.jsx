import avatar2 from "../assets/avatar2.svg";
import groove from "../assets/groove.svg";
import groove2 from "../assets/groove2.svg";
import zwilt3 from "../assets/zwilt3.svg";
import quotes from "../assets/quotes.svg";
import { useState } from "react";

function Reviews() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative flex -skew-y-[3deg] flex-col items-center justify-start bg-tertiary text-white">
      <div className="self-end">
        <img src={quotes} alt="quotes" />
      </div>
      <div className="mb-56 ml-10 mt-20 flex w-10/12 skew-y-[3deg] flex-row tabletLandscape:w-11/12 tabletPortrait:flex-col phone:ml-[0px]">
        <div className="mb-12 flex w-1/2 flex-col leading-10 tabletPortrait:w-full tabletPortrait:pl-12 phone:pl-3">
          <div className="smallPhone:text-[2rem] text-[4rem] font-bold leading-[1] desktop:text-[3rem] phone:text-[2.5rem]">
            <h2>How it worked</h2>
            <h2
              className="inline-flex items-center"
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
            >
              for Jason
              <img src={avatar2} alt="avatar" className="smallPhone:w-12 m-2" />
              at
            </h2>
            <h2 className="">
              <img
                src={groove}
                alt="groove logo"
                className="smallPhone:w-28 w-32"
              />
            </h2>
          </div>
          <div className="my-3 w-8/12 font-thin leading-6">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since.
          </div>
          <div>
            <button className="mr-3 rounded-[20px] bg-white p-5">
              <img src={zwilt3} alt="" />
            </button>
            <button className="rounded-[20px] bg-white p-5">
              <img src={zwilt3} alt="" className="-scale-x-100 transform" />
            </button>
          </div>
        </div>

        <div className="flex w-1/2 flex-col tabletPortrait:w-10/12 tabletPortrait:pl-12 phone:w-full phone:pl-3">
          <div
            className={`${isActive ? "opacity-100" : "opacity-95"} mb-5 inline-flex items-center transition-all duration-500`}
          >
            <div className="mr-3">
              <img
                src={isActive ? avatar2 : groove2}
                alt="groove logo"
                className="w-16"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-bold">Jason Makki</span>
              <span className="text-sm font-thin">
                Engineer at {isActive ? "FOGHORN LLC" : "GROOVE"}
              </span>
              <span className="text-sm font-thin">
                {isActive ? "California" : "San Francisco"}
              </span>
            </div>
          </div>
          <div className="w-4/5 tabletPortrait:w-full">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since.Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
