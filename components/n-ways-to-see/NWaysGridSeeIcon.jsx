import React from "react";
import seeset_logo from "@/public/img/9_ways/seeset_logo.svg";

export default function NWaysGridSeeIcon() {
  return (
    <div className="bg-white bg-opacity-50 text-black  w-[63px] h-auto see-button absolute bottom-0 -right-0 z-20 p-1">
      <img src={seeset_logo.src} className="" />
    </div>
  );
}
