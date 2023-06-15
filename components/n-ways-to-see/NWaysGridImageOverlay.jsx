import React from "react";
import NWaysGridImageOverlayBlock from "./NWaysGridImageOverlayBlock";

export default function NWaysGridImageOverlay({ text, meta }) {
  return (
    <div className="absolute w-full h-full z-20 flex items-start opacity-0 bg-white hover:bg-white text-black text-sm group-hover:opacity-100 duration-500 overflow-x-hidden overflow-y-scroll z-20">
      {text !== "" > 0 && (
        <NWaysGridImageOverlayBlock title={`texts`} block={text} />
      )}
      {meta && <NWaysGridImageOverlayBlock title={`labels`} block={meta} />}
    </div>
  );
}
