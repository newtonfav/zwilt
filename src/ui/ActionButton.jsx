/* eslint-disable react/prop-types */
function ActionButton({ logo, text }) {
  return (
    <div className="inline-flex items-center">
      <span className="bg-black mr-2 rounded-[15px] p-4">
        <img src={logo} alt="" className="w-4" />
      </span>
      <span className="text-lg font-bold">{text}</span>
    </div>
  );
}

export default ActionButton;
