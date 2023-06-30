import React, { useEffect, useState } from "react";
import NWaysCarouselImage from "./NWaysCarouselImage";
import NWaysSeeIcon from "./NWaysSeeIcon";
import NWaysPagination from "./NWaysPagination";

export default function NWaysCarousel({ title, collection, apiURL }) {
  const [collectionData, setCollectionData] = useState({});
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePath, setImagePath] = useState("");

  function getImagePath(id) {
    return `${apiURL}/collections/${collection}/data/${id}`;
  }

  useEffect(() => {
    const fetchImages = async (collection) => {
      fetch(`${apiURL}/collections/${collection}/data?page=0&size=50`, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw "Error";
        })
        .then((data) => {
          const fetchedData = [];
          data.data.map((d, i) => {
            const path = `${apiURL}/collections/${collection}/data/${d.id}`;
            const imageId = d.files && d.files[0].id;
            const dataId = path.split("/").reverse()[0];
            Object.assign(d, {
              imagePath: path
                .replace("/data/", "/files/")
                .replace(dataId, imageId),
            });
            fetchedData.push(d);
          });
          setCollectionData(fetchedData);
          setPages(data.data.length);
          setItem(data.data[currentPage - 1]);
        })
        .catch((err) => {
          console.error("Error fetching images: ", err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchImages(collection);
  }, []);

  useEffect(() => {
    if (!loading) {
      return setItem(collectionData[currentPage - 1]);
    }
  }, [currentPage]);

  if (loading) {
    return (
      <div className="w-full p-10 h-full flex justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div className="max-w-xl mx-auto w-full border self-center border-black relative aspect-video duration-400">
        {item && <NWaysCarouselImage item={item} key={item.id} />}
      </div>
      <NWaysPagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        setCurrentImage={setCurrentImage}
        currentPage={currentPage}
      />
      <div className="italic mt-2 mb-6 w-100 text-center">{title}</div>
    </>
  );
}
