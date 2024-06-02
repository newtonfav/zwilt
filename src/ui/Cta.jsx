/* eslint-disable react/prop-types */
import one from "../assets/one.svg";
import whitelogo from "../assets/whitelogo.svg";
import group1 from "../assets/Group1.svg";
import two from "../assets/two.svg";
import group2 from "../assets/group-two.svg";
import three from "../assets/three.svg";
import group3 from "../assets/group3.svg";

function Cta() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-28 text-[40px] font-bold">
        <h2>Start your journey today.</h2>
      </div>

      <Box num={one} image={group1} bgColor={"bg-box1"} action={"Join Now"}>
        <div className="mb-4 text-[35px] font-bold leading-none">
          <p>Find your next star </p>
          <p> performer.</p>
        </div>

        <div className="mb-4 text-sm">
          <p> Assess the candidate through work history, transparent </p>
          <p>tests and video interviews.</p>
        </div>
      </Box>

      <Box num={two} image={group2} bgColor={"bg-box2"} action={"Browse More"}>
        <div className="mb-4 text-[35px] font-bold leading-none">
          <p>Evaluate to your </p>
          <p> heart’s content.</p>
        </div>

        <div className="mb-4 text-sm">
          <p>Explore the vast Zwilt marketplace to find the candidate</p>
          <p>that meets your needs.</p>
        </div>
      </Box>

      <Box num={three} image={group3} bgColor={"bg-box3"} action={"Join Now"}>
        <div className="mb-4 text-[35px] font-bold leading-none">
          <p>Start building </p>
          <p> your team.</p>
        </div>

        <div className="mb-4 text-sm">
          <p>Onboard your candidate right away and start </p>
          <p>creating the next big thing.</p>
        </div>
      </Box>
    </div>
  );

  function Box({ num, image, children, bgColor, action }) {
    return (
      <div
        className={`${bgColor} -mt-16 inline-flex h-full w-4/5 items-center [clip-path:polygon(0%_20%,_100%_0%,_100%_80%,_0_100%)]`}
      >
        <div className="m-5 mb-24">
          <img src={num} alt="" />
        </div>

        <div className="mr-8">
          <div className="mt-8 flex flex-col">
            {children}{" "}
            <div className="inline-flex items-center">
              <span className="bg-black mr-2 rounded-[15px] p-4">
                <img src={whitelogo} alt="" className="w-4" />
              </span>
              <span className="text-lg font-bold">{action}</span>
            </div>
          </div>
        </div>

        <div className="images ml-72">
          <img src={image} alt="developers" className="image" />
        </div>
      </div>
    );
  }
}

export default Cta;
