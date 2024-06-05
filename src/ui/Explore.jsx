/* eslint-disable react/prop-types */
import badge from "../assets/badge.svg";
import profiles from "../assets/profiles.svg";
import categories from "../assets/categories.svg";
import shopify from "../assets/shopify.svg";
import magento from "../assets/magneto.svg";
import datascientist from "../assets/data-scientist.svg";
import webflow from "../assets/web-flow.svg";
import dotnet from "../assets/dotnet.svg";
import blacklogo from "../assets/blacklogo.svg";
import figma from "../assets/figma.svg";
import unreal from "../assets/unreal.svg";
import photoshop from "../assets/photosho.svg";
import illustrator from "../assets/illustrator.svg";
import cinema4d from "../assets/cinema4d.svg";
import whitelogo from "../assets/whitelogo.svg";
import ActionButton from "./ActionButton";

function Explore() {
  return (
    <div className="-skew-y-[3deg] bg-secondary pb-8">
      <div className="mb-10 flex skew-y-[3deg] flex-col items-center">
        <div className="mb-20 mt-40 flex flex-col items-center text-center text-[2.8rem] font-bold leading-none tabletPortrait:text-[2rem]">
          <h2>
            Your one-stop marketplace for finding <br /> the talent your
            business needs.
          </h2>
        </div>

        <div className="flex w-10/12 flex-row items-baseline tabletLandscape:w-11/12 tabletPortrait:flex-col-reverse">
          <div className="mb-40 mr-8 w-5/12 tabletLandscape:mr-0 tabletLandscape:p-4 tabletPortrait:w-full">
            <div className="smallPhone:text-balance tabletPortrait:inline-flex phone:flex-col">
              <Stats padding={"pr-10 smallPhone:p-0"}>
                <span>
                  Find Dev and IT professionals to <br />
                  scale your business.
                </span>
              </Stats>

              <Stats>
                <span>
                  Explore Creative individuals with a <br />
                  keen eye for detail.
                </span>
              </Stats>
            </div>

            <ActionButton
              text={"Explore More"}
              padding={"p-[1.3rem]"}
              logo={whitelogo}
            />
          </div>

          <div className="w-8/12 tabletPortrait:w-full">
            <div className="mb-5 rounded-[7px] bg-white p-6">
              <div className="mb-3 ml-3 text-sm">IT & Development</div>
              <div className="no-scrollbar mb-5 mt-3 flex flex-row items-baseline justify-around phone:overflow-x-scroll">
                <DevCategories image={shopify} text={"Shopify Developer"} />

                <DevCategories image={magento} text={"Magnento Developer"} />

                <DevCategories image={datascientist} text={"Data Scientist"} />

                <DevCategories image={webflow} text={"Webflow Developer"} />

                <DevCategories image={dotnet} text={"Dotnet Developer"} />

                <DevCategories image={blacklogo} />
              </div>
            </div>

            <div className="mb-5 rounded-[7px] bg-white p-6">
              <div className="mb-3 ml-3 text-sm">Design and Creative</div>
              <div className="fmb-5 no-scrollbar mt-3 flex flex-row items-baseline justify-around phone:overflow-x-scroll">
                <DevCategories image={blacklogo} />

                <DevCategories image={figma} text={"UI Designer"} />

                <DevCategories image={photoshop} text={"Graphics Designer"} />

                <DevCategories
                  image={illustrator}
                  text={"Illustrator Artist"}
                />

                <DevCategories image={unreal} text={"Unreal Engine"} />

                <DevCategories image={cinema4d} text={"Cinema 4D"} />
              </div>
            </div>
            <div>
              <span className="font-bold">30 more</span> <span>to explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function Stats({ children, padding }) {
    return (
      <div className={`mb-12 ${padding ? padding : ""} `}>
        <div className="mb-3 flex flex-col text-[1.25rem] font-medium">
          {children}
        </div>
        <div className="text-sm font-light">
          <ul className="grid grid-flow-col grid-rows-2 gap-2">
            <li className="flex items-center">
              <img src={badge} alt="badge" className="mr-2" />
              <span>989 Skills</span>
            </li>
            <li className="flex items-center">
              <img src={profiles} alt="profile" className="mr-2" />
              <span>45 Sub-Categories</span>
            </li>
            <li className="flex items-center">
              <img src={categories} alt="categories" className="mr-2" />
              <span>1011 Profiles</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  function DevCategories({ image, text }) {
    return (
      <div className="flex flex-col items-center phone:p-1">
        <div
          className={`mb-1 ${!text ? "w-[4rem] rounded-[15px]" : "rounded-full"} bg-darkwhite p-5`}
        >
          <img src={image} alt="shopify" className="w-6" />
        </div>
        {text && (
          <span className="flex flex-col items-center text-wrap text-center text-xs">
            <span className="px-[0.5rem]">{text}</span>
          </span>
        )}
      </div>
    );
  }
}

export default Explore;
