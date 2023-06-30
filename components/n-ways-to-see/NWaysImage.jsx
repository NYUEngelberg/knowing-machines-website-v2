import React, { useEffect, useState } from "react";
import NWaysImageOverlay from "./NWaysImageOverlay";
import NWaysSeeIcon from "./NWaysSeeIcon";

export default function NWaysImage({ title, imagePath, apiURL }) {
  const [imageData, setImageData] = useState(null);
  const [imgPath, setImgPath] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const fetchImageData = async (imagePath) => {
      fetch(imagePath, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw "Error";
        })
        .then((data) => {
          const id = data.data.files[0].id;
          const dataId = imagePath.split("/").reverse()[0];
          const newImagePath = imagePath
            .replace("/data/", "/files/")
            .replace(dataId, id);
          setImgPath(newImagePath);
          setImageData(data.data);
        })
        .catch((err) => {
          console.error("Error fetching image: ", err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchImageData(imagePath);
  }, []);

  if (loading) {
    return <div className="my-4">Loading</div>;
  }
  const meta = imageData.labels.length > 0 && imageData.labels[0].meta;
  const text = imageData.texts.length > 0 && imageData.texts[0].text;
  return (
    <div className={`max-w-xl mx-auto w-100 self-center flex flex-col `}>
      <div className="relative group w-full relative border border-black cursor-pointer">
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
          src={imgPath}
          alt={title}
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
      {title && (
        <div className="italic mt-2 mb-6 w-100 text-center">{title}</div>
      )}
    </div>
  );
}
