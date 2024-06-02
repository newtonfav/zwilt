import avatar2 from "../assets/avatar2.svg";
import groove from "../assets/groove.svg";
import groove2 from "../assets/groove2.svg";
import zwilt3 from "../assets/zwilt3.svg";
import quotes from "../assets/quotes.svg";

function Reviews() {
  return (
    <div className="bg-tertiary relative -mt-20 flex h-screen flex-col items-center justify-start text-white [clip-path:polygon(0%_10%,_100%_0%,_100%_100%,_0_100%)]">
      <div className="self-end">
        <img src={quotes} alt="quotes" />
      </div>
      <div className="my-32 ml-10 flex w-2/3 flex-row">
        <div className="flex w-1/2 flex-col leading-10">
          <div className="text-[40px] font-bold">
            <h2>How it worked</h2>
            <h2 className="inline-flex items-center">
              for Jason
              <img src={avatar2} alt="avatar" className="w-15 m-2" />
              at
            </h2>
            <h2 className="">
              <img src={groove} alt="groove logo" className="w-32" />
            </h2>
          </div>
          <div className="my-3 w-8/12 font-thin leading-6">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since.
          </div>
          <div>
            <button className="mr-3 rounded-[20px] bg-white p-5">
              <img src={zwilt3} alt="" />
            </button>
            <button className="rounded-[20px] bg-white p-5">
              <img src={zwilt3} alt="" className="-scale-x-100 transform" />
            </button>
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="mb-5 inline-flex items-center">
            <div className="mr-3">
              <img src={groove2} alt="groove logo" className="w-16" />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-bold">Jason Makki</span>
              <span className="text-sm font-thin">Engineer at GROOVE</span>
              <span className="text-sm font-thin">San Francisco</span>
            </div>
          </div>
          <div className="w-4/5">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since.Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
