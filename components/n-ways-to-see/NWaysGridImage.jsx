import React, { useState } from "react";
import NWaysImageOverlay from "./NWaysImageOverlay";

export default function NWaysGridImage({
  item,
  apiURL,
  collection,
  currentImage,
  setCurrentImage,
}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const meta =
    item.labels.length > 0 &&
    (Object.keys(item.labels[0].meta).length > 0
      ? item.labels[0].meta
      : Object.assign({}, { name: item.labels[0].name }));
  const text = item.texts.length > 0 && item.texts[0].text;
  const handleClick = (id) => {
    if (id !== currentImage) {
      setCurrentImage(id);
    }
  };
  return (
    <div
      className={`aspect-square cursor-pointer group duration-300 ${
        currentImage === item.id &&
        "pointer-events-auto absolute top-0 bottom-0 right-0 left-0 duration-400 z-10"
      }`}
    >
      {currentImage === item.id && !isOverlayOpen && (
        <button
          onClick={() => {
            handleClick(null);
          }}
          className="z-30 absolute"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="black"
            className="mt-2 ml-2 p-1 w-6 h-6 z-20 bg-white rounded-full hover:bg-black hover:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <div
        className={`w-full h-full bg-cover duration-200 bg-center ${
          currentImage === item.id && "cursor-default"
        } ${item.empty && "pointer-events-none cursor-none"}`}
        style={{
          backgroundImage:
            item.files.length > 0
            ? `url("${apiURL}/collections/${collection}/files/${item.files[0].name}")`
              : "",
        }}
        onClick={() => handleClick(item.id)}
      >
        <div
          className={`z-20 absolute bottom-0 see-button-text p-1 pr-20 bg-white bg-opacity-75 w-full text-right duration-300 cursor-pointer ${
            currentImage === item.id && !isOverlayOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOverlayOpen(true)}
        >
          Click to see data
        </div>
      </div>
      {isOverlayOpen && (
        <NWaysImageOverlay
          text={text}
          meta={meta}
          isOverlayOpen={isOverlayOpen}
          setIsOverlayOpen={setIsOverlayOpen}
          hasImage={item.files.length > 0}
        />
      )}
    </div>
  );
}
