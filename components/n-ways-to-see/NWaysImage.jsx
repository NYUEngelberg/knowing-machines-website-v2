import React, { useEffect, useState } from "react";
import NWaysGridImageOverlay from "./NWaysGridImageOverlay";
import NWaysGridSeeIcon from "./NWaysGridSeeIcon";

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
          console.error("Error fetching image: ", Error);
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
    <div className="max-w-none w-100 self-center flex flex-col">
      <div className="relative group w-full relative border border-black cursor-pointer">
        <img
          className="max-w-auto min-w-full block pointer-events-auto "
          src={imgPath}
          alt={title}
          onClick={() => setIsOverlayOpen(true)}
        />
        <div
          className={`${
            isOverlayOpen && "absolute"
          } top-0 bottom-0 left-0 right-0 duration-400`}
        >
          {isOverlayOpen && (
            <NWaysGridImageOverlay
              text={text}
              meta={meta}
              isOverlayOpen={isOverlayOpen}
              setIsOverlayOpen={setIsOverlayOpen}
              hasImage={true}
            />
          )}
        </div>
        <NWaysGridSeeIcon currentImage={Math.random(2, 0)} />
      </div>
      <div className="italic mt-2 mb-6 w-100 text-center">{title}</div>
    </div>
  );
}
