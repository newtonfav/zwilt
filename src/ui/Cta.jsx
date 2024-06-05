/* eslint-disable react/prop-types */
import one from "../assets/one.svg";
import whitelogo from "../assets/whitelogo.svg";
import group1 from "../assets/Group1.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import ActionButton from "./ActionButton";
import groupThree from "../assets/groupThree.svg";
import groupTwo from "../assets/group-two.svg";

function Cta() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-28 text-[40px] font-bold">
        <h2>Start your journey today.</h2>
      </div>

      <Box
        num={one}
        image={group1}
        bgColor={"bg-box1"}
        action={"Join Now"}
        id={"box1"}
      >
        <div className="mb-4 text-[35px] font-bold leading-none">
          <p>Find your next star </p>
          <p> performer.</p>
        </div>

        <div className="mb-4 text-sm">
          <p> Assess the candidate through work history, transparent </p>
          <p>tests and video interviews.</p>
        </div>
      </Box>

      <Box
        num={two}
        image={groupTwo}
        bgColor={"bg-box2"}
        action={"Browse More"}
        id={"box2"}
      >
        <div className="mb-4 text-[35px] font-bold leading-none">
          <p>Evaluate to your </p>
          <p> heart’s content.</p>
        </div>

        <div className="mb-4 text-sm">
          <p>Explore the vast Zwilt marketplace to find the candidate</p>
          <p>that meets your needs.</p>
        </div>
      </Box>

      <Box
        num={three}
        image={groupThree}
        bgColor={"bg-box3"}
        action={"Join Now"}
        id={"box3"}
      >
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

  function Box({ num, image, children, bgColor, action, id }) {
    return (
      <div
        className={`${bgColor} my-4 flex w-4/5 -skew-y-[3deg] flex-row overflow-hidden px-2`}
      >
        <div className="my-4 inline-flex skew-y-[3deg] items-center">
          <div className="m-5 mb-24">
            <img src={num} alt="" />
          </div>

          <div className="">
            {/* <div className={`${id === "box3" ? "w-4/12" : "mr-8 w-4/12"} `}> */}
            <div className="flex flex-col">
              {children} <ActionButton text={action} logo={whitelogo} />
            </div>
          </div>
        </div>
        <div className={`images ml-auto ${id === "box2" ? "mr-[24px]" : ""}`}>
          <img
            src={image}
            alt="developers"
            className={`${id === "box3" ? "h-[388px]" : ""}`}
          />
        </div>
      </div>
    );
  }
  // function Box({ num, image, children, bgColor, action, id }) {
  //   return (
  //     <div
  //       className={`${bgColor} -mt-16 inline-flex h-full w-4/5 items-center [clip-path:polygon(0%_20%,_100%_0%,_100%_80%,_0_100%)]`}
  //     >
  //       <div className="m-5 mb-24">
  //         <img src={num} alt="" />
  //       </div>

  //       <div className={`${id === "box3" ? "w-4/12" : "mr-8 w-4/12"} `}>
  //         <div className="mt-8 flex flex-col">
  //           {children} <ActionButton text={action} logo={whitelogo} />
  //         </div>
  //       </div>

  //       <div className={`images ${id === "box3" ? "ml-52" : "ml-72"}`}>
  //         <img src={image} alt="developers" className="image" />
  //       </div>
  //     </div>
  //   );
  // }
}

export default Cta;
