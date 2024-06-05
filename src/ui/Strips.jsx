/* eslint-disable react/prop-types */
function Strips() {
  return (
    <div className="smallPhone:hidden mb-2 flex -skew-y-[3deg] flex-col">
      <Strip />
      <Strip height={"h-[8px]"} />
      <Strip height={"h-[5px]"} />
      <Strip height={"h-[3px]"} />
    </div>
  );

  function Strip({ height }) {
    return (
      <div className={`strip ${height ? height : "h-[12px]"} mb-2`}>&nbsp;</div>
    );
  }
}

export default Strips;
