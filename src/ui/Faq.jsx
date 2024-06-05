import logoYellow from "../assets/logo-yellow.svg";

function Faq() {
  return (
    <div className="-mt-20 -skew-y-[3deg] bg-box3 py-32">
      <div className="flex skew-y-[3deg] flex-col">
        <div className="mb-8 self-center text-[3.12rem] font-bold tabletPortrait:text-[2rem] phone:text-[1.5rem]">
          Frequently asked questions
        </div>

        <div className="grid grid-cols-3 grid-rows-8 text-[1.5rem] tabletPortrait:text-[1rem] phone:text-[0.9rem]">
          <div className="col-start-1 col-end-3 border-r border-t border-greydarkest p-8 phone:px-0">
            General
          </div>
          <div className="border-y border-greydarkest p-8">
            I want to work part-time, is that possible
          </div>
          <div className="col-start-1 col-end-3 border-y border-greydarkest p-8"></div>
          <div className="col-start-3 col-end-4 p-8">
            How long are the average projects?
          </div>
          <div className="col-start-1 col-end-3 border-y border-greydarkest bg-greydarkest p-8"></div>
          <div className="col-start-3 col-end-4 inline-flex items-baseline border-t border-greydarkest bg-greydarkest p-8">
            <span>How does the payment works?</span>
            <img src={logoYellow} alt="logo" className="ml-auto w-[40px]" />
          </div>
          <div className="col-start-3 col-end-4 border-y border-greydarkest p-8">
            How much can I earn?
          </div>
          <div className="border-y border-r border-greydarkest p-8 phone:px-0">
            General
          </div>
          <div className="border border-y border-greydarkest p-8 phone:px-0">
            Joining Process
          </div>
          <div className="border-y border-greydarkest p-8">
            I want to work part-time, is that possible
          </div>
          <div className="col-start-1 col-end-3 border-y border-greydarkest p-8"></div>
          <div className="col-start-3 col-end-4 border-y border-greydarkest p-8">
            How long are the average projects?
          </div>
          <div className="col-start-1 col-end-3 border-y border-greydarkest p-8"></div>
          <div className="col-start-3 col-end-4 border-y border-greydarkest p-8">
            How long are the average projects?
          </div>
          <div className="col-start-1 col-end-3 border-y border-greydarkest p-8"></div>
          <div className="col-start-3 col-end-4 border-y border-greydarkest p-8">
            How much can I earn?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
