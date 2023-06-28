import React, { useEffect, useState } from "react";
import NWaysGridImage from "./NWaysGridImage";
import NWaysSeeIcon from "./NWaysSeeIcon";
import NWaysPagination from "./NWaysPagination";

export default function NWaysGrid({ title, collection, apiURL }) {
  const [collectionData, setCollectionData] = useState({});
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSet, setCurrentSet] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const fetchImages = async (collection) => {
      fetch(`${apiURL}/collections/${collection}/data?page=0&size=200`, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw "Error";
        })
        .then((data) => {
          setPages(
            data.data.length > itemsPerPage
              ? Math.trunc(data.data.length / itemsPerPage) + 1
              : pages
          );
          setCollectionData(data.data);
          setCurrentSet(data.data.slice(0, itemsPerPage));
        })
        .catch((err) => {
          console.error("Error fetching images: ", Error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchImages(collection);
  }, []);

  useEffect(() => {
    const start = currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage;
    const end =
      currentPage === 1
        ? itemsPerPage
        : (currentPage - 1) * (itemsPerPage + itemsPerPage);
    let cSet = !loading && collectionData.slice(start, end);
    const blankGridItems = itemsPerPage - cSet.length;
    for (let i = 0; i < blankGridItems; i++) {
      cSet.push({
        id: Math.random().toString().substring(2, 8),
        labels: {},
        texts: {},
        files: {},
        empty: true,
      });
    }
    setCurrentSet(cSet);
  }, [currentPage]);

  function displayText(item) {
    let text;
    if (item.labels.length > 0) {
      text = item.labels[0].name;
    }
    if (item.texts.length > 0) {
      text = item.texts[0].text;
    }
    return text;
  }

  return (
    <>
      <div
        className={`image-grid grid grid-cols-3 self-center w-full divide-x divide-y divide-solid divide-black border-gray-900 border relative duration-300 ${
          currentImage && "pointer-events-none"
        }`}
      >
        {loading ? (
          "loading"
        ) : (
          <>
            <NWaysSeeIcon />
            {currentSet.length > 0 &&
              currentSet.map((item, idx) => {
                return (
                  <NWaysGridImage
                    item={item}
                    apiURL={apiURL}
                    collection={collection}
                    key={idx}
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                  />
                );
              })}
          </>
        )}
      </div>
      {!currentImage && (
        <style jsx global>
          {`
            .image-grid:hover > * {
              opacity: 0.3;
            }
            .image-grid:hover > *:hover,
            .image-grid:hover > .see-button {
              opacity: 1;
            }
          `}
        </style>
      )}
      {pages > 1 && (
        <NWaysPagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setCurrentImage={setCurrentImage}
        />
      )}
      <div className="italic mt-2 mb-6 w-100 text-center">{title}</div>
    </>
  );
}
