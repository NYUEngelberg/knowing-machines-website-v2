import React from "react";

export default function NWaysImage({ title, imagePath }) {
  return (
    <div className="max-w-none w-100 self-center flex flex-col">
      <img src={imagePath} alt={title} className="max-w-auto  min-w-full" />
      <div className="italic mt-2 mb-6 w-100 text-center">{title}</div>
    </div>
  );
}
