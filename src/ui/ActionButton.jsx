/* eslint-disable react/prop-types */
function ActionButton({ logo, text, style, padding, borderRadius }) {
  return (
    <div className={`inline-flex items-center ${style}`}>
      <span
        className={`bg-black mr-2 ${borderRadius ? borderRadius : "rounded-[15px]"} ${padding ? padding : "p-5"}`}
      >
        <img src={logo} alt="" className="w-5" />
      </span>
      <span className="text-lg font-bold">{text}</span>
    </div>
  );
}

export default ActionButton;
