import React from "react";

export default function NWaysGridImageOverlayBlock({ title, block }) {
  function renderOverlayBlock() {
    if (typeof block === "object") {
      return (
        <>
          {Object.keys(block).map((key) => (
            <div key={key} className="break-normal">
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
    <div className="min-h-fit my-2 mx-2 relative py-8 px-3 pr-4 flex flex-col w-full">
      <div className="absolute -top-2 -left-3 px-2 py-1 text-white uppercase bg-black">
        {title}
      </div>
      {renderOverlayBlock()}
    </div>
  );
}
