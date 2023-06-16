import React, { useState } from "react";
import NWaysGridImageOverlay from "./NWaysGridImageOverlay";

export default function NWaysGridImage({ item, apiURL, collection }) {
  const meta = item.labels.length > 0 && item.labels[0].meta;
  const text = item.texts.length > 0 && item.texts[0].text;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <div className="aspect-square flex flex-col cursor-pointer group duration-700">
      <div
        className="w-full h-full bg-cover group-hover:opacity-100 duration-200"
        style={{
          backgroundImage:
            item.files.length > 0
              ? `url("${apiURL}/collections/${collection}/files/${item.files[0].id}")`
              : "",
        }}
      >
        <NWaysGridImageOverlay
          text={text}
          meta={meta}
          isOverlayOpen={isOverlayOpen}
          setIsOverlayOpen={setIsOverlayOpen}
          hasImage={item.files.length > 0}
        />
      </div>
    </div>
  );
}
