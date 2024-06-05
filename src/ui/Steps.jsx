/* eslint-disable react/prop-types */
import { useState } from "react";
import step from "../assets/step.svg";
import step_focus from "../assets/step_focus.svg";

function Steps() {
  const steps = [
    {
      step: "Step 1",
      header: " Resume Screening",
      details:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      step: "Step 3",
      header: "Video Interview",
      details:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      step: "Step 3",
      header: " Technical Interview",
      details:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      step: "Step 3",
      header: " Application Review",
      details:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      step: "Step 3",
      header: "Let's get to work",
      details:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
  ];

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="mx-20 mb-20 mt-44 tabletPortrait:mx-8 tabletPortrait:mt-20 phone:mx-3">
        <div className="mb-4 text-[2.6rem] font-bold leading-none tabletPortrait:text-[2rem]">
          <h2>How we ensure you’re</h2>
          <h2>in good hands.</h2>
        </div>

        <div className="text-md flex w-full flex-col font-light">
          <span>
            With our comprehensive screening process, we hand-pick highly
          </span>
          <span>
            skilled candidates so you can onboard them in a matter of days.
          </span>
        </div>

        <div className="my-6 h-[500px] font-light">
          {steps.map((step) => (
            <Step
              stepNum={step.step}
              header={step.header}
              details={step.details}
              key={step.step}
            />
          ))}
        </div>
      </div>
    </div>
  );

  function Step({ stepNum, header, details }) {
    const [isActive, setIsActive] = useState(false);

    return (
      <div
        className={`my-3 w-1/2 rounded-[7px] border-[1.5px] border-solid border-bcolor p-2 tabletLandscape:w-10/12 tabletPortrait:w-full ${isActive ? "shadow-lg" : ""}`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <button className="inline-flex items-center">
          <img
            src={isActive ? step_focus : step}
            alt="button"
            className="mr-3 w-12"
          />
          <span>
            <span className="font-semibold">{stepNum}:</span> {header}
          </span>
        </button>
        <div
          className={`mx-2 my-3 transition-all duration-300 ease-in-out ${isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden text-wrap text-sm`}
        >
          {details}
        </div>
      </div>
    );
  }
}

export default Steps;
