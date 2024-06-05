/* eslint-disable react/prop-types */
import logo from "../assets/logo.svg";
import zwilt from "../assets/zwilt.svg";

function Logo({ style }) {
  return (
    <div className={`inline-flex ${style} `}>
      <img src={zwilt} alt="zwilt" className="smallPhone:w-20 p-1" />
      <img src={logo} alt="zwilt" className="smallPhone:w-5" />
    </div>
  );
}

export default Logo;
