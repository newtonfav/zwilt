/* eslint-disable react/prop-types */
import ActionButton from "./ActionButton";
import whitelogo from "../assets/whitelogo.svg";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="-mt-24 flex flex-col bg-black pt-44">
      <div className="flex flex-col items-center">
        <div className="banner mb-44 flex w-11/12 -skew-y-[3deg] flex-col items-center bg-purple p-24 tabletPortrait:w-full tabletPortrait:px-8">
          <div className="flex skew-y-[3deg] flex-col items-center">
            <div className="mb-12 flex flex-col items-center text-center text-[3.16rem] font-semibold leading-none text-white phone:text-[2.2rem]">
              <span>Need a job done, and done </span>
              <span>well? Get started</span>
            </div>
            <ActionButton
              logo={whitelogo}
              style={"rotate-90"}
              padding={"p-8"}
              borderRadius={"rounded-[30px]"}
              disableAnimation={true}
              customScreen={"tabletPortrait:p-4 tabletPortrait:w-12"}
            />
          </div>
        </div>

        <div className="mb-32 flex w-11/12 flex-row text-white tabletLandscape:flex-col">
          <div className="flex w-2/5 flex-col tabletLandscape:mb-8 tabletPortrait:ml-auto tabletPortrait:w-11/12">
            <Logo style={"mb-8"} />
            <div className="mb-8 font-light">
              We take complex hiring processes - and <br /> simplify them.
              Connecting you to the world’s <br /> highly qualified talent pool.
            </div>
            <div>
              <span className="">LINKS AND REDIRECTS</span>
              <div className="my-5">
                <Button text={"Hire now"} />
                <Button text={"Apply now"} />
              </div>
            </div>
          </div>

          <div className="flex-grow">
            <div className="mb-16 text-[3.15rem] font-semibold tabletPortrait:text-center tabletPortrait:text-[2rem]">
              Connecting the right people to the right businesses.
            </div>
            <div className="grid grid-cols-1 grid-rows-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 tabletPortrait:grid-cols-2 tabletPortrait:gap-2 tabletPortrait:text-[0.9rem] phone:grid-cols-2 phone:gap-1">
              <div className="p-4 opacity-40 phone:p-0">PLATFORM</div>
              <div className="p-4 opacity-40 phone:p-0">CATEGORIES</div>
              <div className="p-4 opacity-40 phone:p-0">HELP</div>
              <div className="p-4 opacity-40 phone:p-0">GET IN TOUCH @</div>
              <div className="p-4 phone:p-0">Find Work</div>
              <div className="p-4 phone:p-0">Data Science</div>
              <div className="p-4 phone:p-0">FAQ’s</div>
              <div className="p-4 phone:p-0">Instagram</div>
              <div className="p-4 phone:p-0">Find Talent</div>
              <div className="p-4 phone:p-0">IT & Networking</div>
              <div className="p-4 phone:p-0">Contact Us</div>
              <div className="p-4 phone:p-0">LinkedIn</div>
              <div className="p-4 phone:p-0">Categories</div>
              <div className="p-4 phone:p-0">Web & Mobile</div>
              <div className="col-start-1 col-end-2 p-4 lg:col-start-4 lg:col-end-5 phone:p-0">
                Twitter
              </div>
              <div className="col-start-1 col-end-2 p-4 phone:p-0">
                About Us
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex border-t px-20 py-3 text-sm text-white phone:px-4 phone:py-2 phone:text-[0.5rem]">
        <div className="">All rights reserved by Zwilt</div>
        <div className="ml-auto underline opacity-40">
          <span className="mr-4">Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>
      </div>
    </div>
  );

  function Button({ text }) {
    return (
      <button className="mr-2 w-2/5 rounded-[25px] bg-buttonColor p-4 tabletPortrait:my-2 tabletPortrait:w-11/12">
        {text}
      </button>
    );
  }
}

export default Footer;
