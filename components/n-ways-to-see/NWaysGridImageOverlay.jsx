import React from "react";
import NWaysGridImageOverlayBlock from "./NWaysGridImageOverlayBlock";

export default function NWaysGridImageOverlay({
  text,
  meta,
  isOverlayOpen,
  setIsOverlayOpen,
}) {
  return (
    <>
      {!isOverlayOpen && (
        <div
          className="relative md:hidden sm:pointer-events-auto w-full h-full top-0 right-0 left-0 bottom-0"
          onClick={() => setIsOverlayOpen(true)}
        ></div>
      )}

      <div
        className={`${
          isOverlayOpen
            ? "absolute pointer-events-none top-0 right-0 left-0 bottom-0 opacity-100 bg-white"
            : "hidden md:block pointer-events-auto sm:absolute sm:top-0 sm:right-0 sm:left-0 sm:bottom-0 "
        } md:pointer-events-auto sm:pointer-events-auto md:relative w-full h-full z-20 flex items-start opacity-0 md:bg-white md:hover:bg-white text-black text-sm md:group-hover:opacity-100 duration-500 overflow-x-hidden overflow-y-scroll`}
      >
        {isOverlayOpen ? (
          <button
            className="absolute top-0 right-0 pointer-events-auto z-100"
            onClick={() => setIsOverlayOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
        {text !== "" > 0 && (
          <NWaysGridImageOverlayBlock title={`texts`} block={text} />
        )}
        {meta && <NWaysGridImageOverlayBlock title={`labels`} block={meta} />}
      </div>
    </>
  );
}
