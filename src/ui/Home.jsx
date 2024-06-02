import avatar from "../assets/avatar.svg";
import button from "../assets/button.svg";

function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-start">
      <div className="mb-8 mt-28 flex flex-col items-center text-[50px] font-bold leading-none">
        <span className="inline-flex items-baseline">
          Finding the right fit
          <img src={avatar} alt="avatar" className="w-14" />
          has
        </span>
        <span>never been easier.</span>
      </div>
      <div className="my-1 flex flex-col items-center text-lg">
        <div>
          With our rigorous pre-vetting process, you&apos;ll never have to
        </div>
        <div>worry about finding the ideal candidate ever again.</div>
      </div>

      <form
        action="#"
        className="border-bcolor hover:ring-bcolor my-3 flex w-1/2 items-stretch justify-center rounded-[15px] border-[1.5px] border-solid hover:ring-[1px] lg:w-3/12"
      >
        <input
          type="text"
          className="w-full rounded-[15px] p-5 focus:outline-none"
          placeholder="Looking for design"
        />
        <button className="rounded-[15px] bg-yellow p-6">
          <img src={button} alt="button" className="w-7" />
        </button>
      </form>

      <div className="my-5 flex w-3/4 flex-col items-center rounded-[15px] bg-grey p-8 lg:w-6/12">
        <div className="bg-greydarker mb-3 inline-flex flex-row justify-center rounded-[15px]">
          <span className="rounded-[15px] bg-green p-4 font-semibold">
            IT & Development
          </span>
          <span className="p-4">Design and Creative</span>
        </div>

        <div className="w-10/12 text-sm">
          <ul className="text-greylight grid grid-flow-col grid-rows-4 gap-6">
            <li>Python Developer</li>
            <li>Shopify Developer</li>
            <li className="text-black font-bold">MERN Stack Developer</li>
            <li>Full Stack Developer</li>
            <li>Data Scientist</li>
            <li>Frontend Developer</li>
            <li>Java Developer</li>
            <li>Swift Developer</li>
            <li>C++ Developer</li>
            <li>C# Developer</li>
            <li>React Native Developer</li>
            <li className="text-black font-bold">Explore More</li>
          </ul>
        </div>
      </div>
      {/* <div className="flex w-full justify-center bg-white p-20 [clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_0_100%)]"></div> */}
    </div>
  );
}

export default Home;
