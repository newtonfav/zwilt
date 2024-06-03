import logoYellow from "../assets/logo-yellow.svg";

function Faq() {
  return (
    <div className="bg-box3 -mt-14 -skew-y-[3deg] py-24">
      <div className="flex skew-y-[3deg] flex-col">
        <div className="mb-8 self-center text-[50px] font-bold">
          Frequently asked questions
        </div>

        <div className="grid grid-cols-3 grid-rows-8 text-[24px]">
          <div className="border-greydarkest col-start-1 col-end-3 border-r border-t p-8">
            General
          </div>
          <div className="border-greydarkest border-y p-8">
            I want to work part-time, is that possible
          </div>
          <div className="border-greydarkest col-start-1 col-end-3 border-y p-8"></div>
          <div className="col-start-3 col-end-4 p-8">
            How long are the average projects?
          </div>
          <div className="border-greydarkest bg-greydarkest col-start-1 col-end-3 border-y p-8"></div>
          <div className="bg-greydarkest border-greydarkest col-start-3 col-end-4 inline-flex items-baseline border-t p-8">
            <span>How does the payment works?</span>
            <img src={logoYellow} alt="logo" className="ml-auto w-[40px]" />
          </div>
          <div className="border-greydarkest col-start-3 col-end-4 border-y p-8">
            How much can I earn?
          </div>
          <div className="border-greydarkest border-y border-r p-8">
            General
          </div>
          <div className="border-greydarkest border border-y p-8">
            Joining Process
          </div>
          <div className="border-greydarkest border-y p-8">
            I want to work part-time, is that possible
          </div>
          <div className="border-greydarkest col-start-1 col-end-3 border-y p-8"></div>
          <div className="border-greydarkest col-start-3 col-end-4 border-y p-8">
            How long are the average projects?
          </div>
          <div className="border-greydarkest col-start-1 col-end-3 border-y p-8"></div>
          <div className="border-greydarkest col-start-3 col-end-4 border-y p-8">
            How long are the average projects?
          </div>
          <div className="border-greydarkest col-start-1 col-end-3 border-y p-8"></div>
          <div className="border-greydarkest col-start-3 col-end-4 border-y p-8">
            How much can I earn?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
