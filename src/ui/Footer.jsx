/* eslint-disable react/prop-types */
import ActionButton from "./ActionButton";
import whitelogo from "../assets/whitelogo.svg";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-black -mt-24 flex flex-col pt-44">
      <div className="flex flex-col items-center">
        <div className="banner mb-44 flex w-11/12 -skew-y-[3deg] flex-col items-center bg-purple p-24">
          <div className="flex skew-y-[3deg] flex-col items-center">
            <div className="mb-12 flex flex-col items-center text-[50px] font-semibold leading-none text-white">
              <span>Need a job done, and done </span>
              <span>well? Get started</span>
            </div>
            <ActionButton
              logo={whitelogo}
              style={"rotate-90"}
              padding={"p-8"}
              borderRadius={"rounded-[30px]"}
            />
          </div>
        </div>

        <div className="mb-32 flex w-11/12 flex-row text-white">
          <div className="flex w-2/5 flex-col">
            <Logo style={"mb-8"} />
            <div className="mb-8 font-thin">
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
            <div className="mb-16 text-[50px] font-semibold">
              Connecting the right people to the right businesses.
            </div>
            <div className="grid grid-cols-4 grid-rows-5 gap-4">
              <div className="p-4 opacity-40">PLATFORM</div>
              <div className="p-4 opacity-40">CATEGORIES</div>
              <div className="p-4 opacity-40">HELP</div>
              <div className="p-4 opacity-40">GET IN TOUCH @</div>
              <div className="p-4">Find Work</div>
              <div className="p-4">Data Science</div>
              <div className="p-4">FAQ’s</div>
              <div className="p-4">Instagram</div>
              <div className="p-4">Find Talent</div>
              <div className="p-4">IT & Networking</div>
              <div className="p-4">Contact Us</div>
              <div className="p-4">LinkedIn</div>
              <div className="p-4">Categories</div>
              <div className="p-4">Web & Mobile</div>
              <div className="col-start-4 col-end-5 p-4">Twitter</div>
              <div className="col-start-1 col-end-2 p-4">About Us</div>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex border-t px-20 py-3 text-sm text-white">
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
      <button className="bg-buttonColor mr-2 w-2/5 rounded-[25px] p-4">
        {text}
      </button>
    );
  }
}

export default Footer;
