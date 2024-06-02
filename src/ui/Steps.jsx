import step from "../assets/step.svg";
import step_focus from "../assets/step_focus.svg";

function Steps() {
  return (
    <div className="-mt-28 flex flex-col justify-center bg-white [clip-path:polygon(0%_10%,_100%_0%,_100%_100%,_0_100%)]">
      <div className="mx-44 mt-44">
        <div className="my-8 text-[40px] font-bold leading-none">
          <h2>How we ensure you’re</h2>
          <h2>in good hands.</h2>
        </div>

        <div className="text-md flex w-4/5 flex-col font-thin">
          <span>
            With our comprehensive screening process, we hand-pick highly
          </span>
          <span>
            skilled candidates so you can onboard them in a matter of days.
          </span>
        </div>

        <div className="my-6 font-thin">
          <div className="border-bcolor my-3 w-5/12 rounded-[7px] border-[1.5px] border-solid p-2">
            <button className="inline-flex items-center">
              <img src={step} alt="button" className="mr-3 w-12" />
              <span>
                <span className="font-semibold">Step 1:</span> Resume Screening
              </span>
            </button>
            <div className="mx-2 my-3 hidden text-wrap text-sm">
              Candidates are assessed through skill based questions in a virtual
              setting. Allowing you to gauge personality and cultural fit.
            </div>
          </div>

          <div className="border-bcolor my-3 w-5/12 rounded-[7px] border-[1.5px] border-solid p-2">
            <button className="inline-flex items-center">
              <img src={step_focus} alt="button" className="mr-3 w-12" />
              <span>
                <span className="font-semibold">Step 2:</span> Video Interview
              </span>
            </button>
            <div className="mx-2 my-3 text-wrap text-sm">
              Candidates are assessed through skill based questions in a virtual
              setting. Allowing you to gauge personality and cultural fit.
            </div>
          </div>

          <div className="border-bcolor my-3 w-5/12 rounded-[7px] border-[1.5px] border-solid p-2">
            <button className="inline-flex items-center">
              <img src={step} alt="button" className="mr-3 w-12" />
              <span>
                <span className="font-semibold">Step 3:</span> Technical
                Interview
              </span>
            </button>
            <div className="mx-2 my-3 hidden text-wrap text-sm">
              Candidates are assessed through skill based questions in a virtual
              setting. Allowing you to gauge personality and cultural fit.
            </div>
          </div>

          <div className="border-bcolor my-3 w-5/12 rounded-[7px] border-[1.5px] border-solid p-2">
            <button className="inline-flex items-center">
              <img src={step} alt="button" className="mr-3 w-12" />
              <span>
                <span className="font-semibold">Step 4:</span> Application
                Review
              </span>
            </button>
            <div className="mx-2 my-3 hidden text-wrap text-sm">
              Candidates are assessed through skill based questions in a virtual
              setting. Allowing you to gauge personality and cultural fit.
            </div>
          </div>

          <div className="border-bcolor my-3 w-5/12 rounded-[7px] border-[1.5px] border-solid p-2">
            <button className="inline-flex items-center">
              <img src={step} alt="button" className="mr-3 w-12" />
              <span>
                <span className="font-semibold">Step 5:</span> Lets get to work
              </span>
            </button>
            <div className="mx-2 my-3 hidden text-wrap text-sm">
              Candidates are assessed through skill based questions in a virtual
              setting. Allowing you to gauge personality and cultural fit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
