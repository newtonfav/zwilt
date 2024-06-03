import Logo from "./Logo";

function NavBar() {
  return (
    <div className="text-md mx-auto my-1 flex h-16 max-w-screen-2xl items-center justify-between rounded-[15px] bg-purple text-white drop-shadow-2xl sm:px-3">
      <Logo />

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
