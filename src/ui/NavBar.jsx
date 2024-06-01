import logo from "../assets/logo.svg";
import zwilt from "../assets/zwilt.svg";

function NavBar() {
  return (
    <div className="text-md mx-auto my-3 flex h-16 max-w-7xl items-center justify-between rounded-[15px] bg-purple text-white sm:px-3">
      <div className="inline-flex">
        <img src={zwilt} alt="zwilt" className="p-1" />
        <img src={logo} alt="zwilt" />
      </div>

      <div className="inline-flex justify-evenly">
        <div className="m-3">Find Work</div>
        <div className="m-3">Find Talents</div>
        <div className="m-3">Articles</div>
        <div className="m-3">About Us</div>
        <div className="m-3">Contact Us</div>
      </div>

      <div className="inline-flex flex-none items-baseline">
        <div className="px-3">Login</div>
        <button className="text-black rounded-[16px] bg-white p-3">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default NavBar;
