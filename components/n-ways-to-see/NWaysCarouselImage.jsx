import React, { useEffect, useState } from "react";
import NWaysImageOverlay from "./NWaysImageOverlay";
import NWaysSeeIcon from "./NWaysSeeIcon";

export default function NWaysImage({ item }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const meta =
    item.labels.length > 0 &&
    (Object.keys(item.labels[0].meta).length > 0
      ? item.labels[0].meta
      : Object.assign({}, { name: item.labels[0].name }));
  const text = item.texts.length > 0 && item.texts[0].text;
  return (
    <div className={`max-w-none w-100 self-center flex flex-col `}>
      <div className="relative group w-full relative border border-black cursor-pointer duration-300">
        <div
          className={`z-20 absolute bottom-0 see-button-text p-1 pr-20 bg-white bg-opacity-75 w-full pointer-events-auto text-right duration-300 cursor-pointer ${
            !isOverlayOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOverlayOpen(true)}
        >
          Click to see data
        </div>
        <img
          className="min-w-full  block pointer-events-auto cursor-default aspect-video"
          src={item.imagePath}
        />
        <div
          className={`${
            isOverlayOpen && "absolute"
          } top-0 bottom-0 left-0 right-0 duration-400`}
        >
          {isOverlayOpen && (
            <NWaysImageOverlay
              text={text}
              meta={meta}
              isOverlayOpen={isOverlayOpen}
              setIsOverlayOpen={setIsOverlayOpen}
              hasImage={true}
            />
          )}
        </div>
        <NWaysSeeIcon />
      </div>
    </div>
  );
}
