import React from "react";

export default function NWaysGridSeeIcon({ currentImage, isOverlayOpen }) {
  return (
    <div className="see-button absolute bottom-0 -right-0 -mt-9 z-20">
      <div className={`p-1 font-semibold bg-gray-100 bg-opacity-100`}>
        {`{see}`}
      </div>
    </div>
  );
}
