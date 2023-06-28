import React from "react";

export default function NWaysImageOverlayBlock({ title, block }) {
  function renderOverlayBlock() {
    if (typeof block === "object") {
      return (
        <>
          {Object.keys(block).map((key) => (
            <div key={key} className="break-normal mb-2">
              {key}: <span className="font-bold">{block[key]}</span>
            </div>
          ))}
        </>
      );
    } else {
      return <>{block}</>;
    }
  }
  return (
    <div className="my-2 mx-2 relative py-8 px-8 pr-4 flex flex-col w-full">
      <div className="top-2 -left-3 px-2 py-1 w-fit mb-4 text-white uppercase bg-black">
        {title}
      </div>
      {renderOverlayBlock()}
    </div>
  );
}
