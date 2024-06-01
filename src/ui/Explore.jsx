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

function Explore() {
  return (
    <div className="bg-secondary flex flex-col items-center">
      <div className="my-20 flex flex-col items-center text-[30px] font-bold">
        <h2>Your one-stop marketplace for finding </h2>
        <h2>the talent your business needs.</h2>
      </div>

      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="mb-3">
            <div>Find Dev and IT professionals to scale your business.</div>
            <div className="icons">
              <ul className="grid grid-flow-col grid-rows-2 gap-2">
                <li className="flex items-center">
                  <img src={badge} alt="" />
                  <span>989 Skills</span>
                </li>
                <li className="flex items-center">
                  <img src={profiles} alt="" />
                  <span>45 Sub-Categories</span>
                </li>
                <li className="flex items-center">
                  <img src={categories} alt="" />
                  <span>1011 Profiles</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>Explore Creative individuals with a keen eye for detail.</div>
            <div className="icons">
              <ul className="grid grid-flow-col grid-rows-2 gap-2">
                <li className="flex items-center">
                  <img src={badge} alt="" />
                  <span>989 Skills</span>
                </li>
                <li className="flex items-center">
                  <img src={profiles} alt="" />
                  <span>45 Sub-Categories</span>
                </li>
                <li className="flex items-center">
                  <img src={categories} alt="" />
                  <span>1011 Profiles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="mb-5 bg-white">
            <div>IT & Development</div>
            <div className="flex flex-row items-center">
              <div>
                <img src={shopify} alt="" />
              </div>
              <div>
                <img src={magento} alt="" />
              </div>
              <div>
                <img src={datascientist} alt="" />
              </div>
              <div>
                <img src={webflow} alt="" />
              </div>
              <div>
                <img src={dotnet} alt="" />
              </div>
              <div>
                <img src={blacklogo} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div>Desing and Creative</div>
            <div className="flex flex-row items-center">
              <div>
                <img src={blacklogo} alt="" />
              </div>
              <div>
                <img src={figma} alt="" />
              </div>
              <div>
                <img src={photoshop} alt="" />
              </div>
              <div>
                <img src={illustrator} alt="" />
              </div>
              <div>
                <img src={unreal} alt="" />
              </div>
              <div>
                <img src={cinema4d} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
