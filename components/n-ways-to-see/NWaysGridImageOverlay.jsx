import React, { useState } from "react";
import NWaysGridImageOverlayBlock from "./NWaysGridImageOverlayBlock";

export default function NWaysGridImageOverlay({
  meta,
  text,
  isOverlayOpen,
  setIsOverlayOpen,
  hasImage,
}) {
  return (
    <div
      className={`cursor-default pointer-events-auto bg-white top-0 right-0 bottom-0 left-0 ${
        isOverlayOpen ? "block absolute" : "hidden"
      } z-10`}
    >
      <button
        onClick={() => {
          setIsOverlayOpen(false);
        }}
        className="z-30 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="black"
          className="ml-2 mt-2 p-1 w-6 h-6 bg-white border border-black rounded-full z-10 hover:bg-black hover:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {text && text !== "" && (
        <NWaysGridImageOverlayBlock title={`texts`} block={text} />
      )}
      {meta && <NWaysGridImageOverlayBlock title={`labels`} block={meta} />}
    </div>
  );
}
