import React from "react";

export default function NWaysGridImageOverlayBlock({ title, block }) {
  function renderBlock() {
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
    <div className="min-h-fit my-2 mx-2 border border-black relative py-6 px-3 flex flex-col w-full">
      <div className="absolute top-0 left-0 px-1 text-white uppercase bg-black">
        {title}
      </div>
      {renderBlock()}
    </div>
  );
}
