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

function Explore() {
  return (
    <div className="bg-secondary flex h-[1000px] flex-col items-center [clip-path:polygon(0%_10%,_100%_0%,_100%_100%,_0_100%)]">
      <div className="mb-20 mt-40 flex flex-col items-center text-[40px] font-bold">
        <h2>Your one-stop marketplace for finding </h2>
        <h2>the talent your business needs.</h2>
      </div>

      <div className="flex w-10/12 flex-row items-baseline lg:w-8/12">
        <div className="mb-40 mr-8 w-4/12">
          <div className="mb-12">
            <div className="mb-3 flex flex-col text-lg font-medium">
              <span>Find Dev and IT professionals to</span>
              <span>scale your business.</span>
            </div>
            <div className="text-sm font-thin">
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

          <div className="mb-8">
            <div className="mb-4 flex flex-col text-lg font-medium">
              <span>Explore Creative individuals with a</span>{" "}
              <span>keen eye for detail.</span>
            </div>
            <div className="text-xs font-thin">
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
          <div className="inline-flex items-center">
            <div className="bg-black mr-2 rounded-[30px] p-5">
              <img src={whitelogo} alt="zwilt logo" className="w-4" />
            </div>
            <span className="text-lg font-medium">Explore More</span>
          </div>
        </div>

        <div className="w-8/12">
          <div className="mb-5 rounded-[7px] bg-white p-6">
            <div className="mb-3 ml-3 text-sm">IT & Development</div>
            <div className="mb-5 mt-3 flex flex-row items-baseline justify-around">
              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img src={shopify} alt="shopify" className="w-6" />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Shopify</span> <span>Developer</span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img src={magento} alt="" className="w-5" />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Magnento</span> <span>Developer</span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img
                    src={datascientist}
                    alt="data logo"
                    className="h-6 w-6"
                  />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Data</span> <span>Scientist</span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img src={webflow} alt="webflow logo" className="w-6" />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Webflow</span> <span>Developer</span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img src={dotnet} alt="dotnet logo" className="w-6" />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Dotnet</span> <span>Developer</span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite rounded-[15px] p-5">
                  <img src={blacklogo} alt="zwiltlogo" className="w-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 rounded-[7px] bg-white p-6">
            <div className="mb-3 ml-3 text-sm">Design and Creative</div>
            <div className="fmb-5 mt-3 flex flex-row items-baseline justify-around">
              <div className="flex items-center">
                <div className="bg-darkwhite mb-1 rounded-[15px] p-5">
                  <img src={blacklogo} alt="zwilt" className="w-6" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img src={figma} alt="figma" className="w-6" />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>UI</span> <span>Designer</span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img src={photoshop} alt="photoshop" className="w-6" />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Graphics</span> <span>Designer</span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img
                    src={illustrator}
                    alt="illustrator logo"
                    className="w-6"
                  />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Illustration</span> <span>Artist</span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img src={unreal} alt="unreal logo" className="w-6" />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Unreal</span> <span>Engine </span>
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-darkwhite mb-1 rounded-full p-5">
                  <img src={cinema4d} alt="cinema4d logo" className="w-6" />
                </div>
                <span className="flex flex-col items-center text-xs">
                  <span>Cinema</span> <span>4D </span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="font-bold">30 more</span> <span>to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
