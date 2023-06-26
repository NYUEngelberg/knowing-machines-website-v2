import React from "react";

export default function NWaysGridSeeIcon({ currentImage, isOverlayOpen }) {
  return (
    <div className="see-button absolute bottom-0 -right-0 -mt-9 flex w-full justify-end z-20">
      <div
        className={`see-button-text p-1 pr-4 bg-gray-100 w-full text-right duration-300 ${
          currentImage || isOverlayOpen ? "block" : "hidden"
        }`}
      >
        Click to see data
      </div>
      <div className={`p-1 font-semibold bg-gray-100 bg-opacity-100`}>
        {`{see}`}
      </div>
    </div>
  );
}
