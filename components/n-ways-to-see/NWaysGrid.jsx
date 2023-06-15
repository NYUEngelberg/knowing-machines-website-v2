import React, { useEffect, useState } from "react";
import NWaysGridImage from "./NWaysGridImage";

export default function NWaysGrid({ title, collection }) {
  const [collectionData, setCollectionData] = useState({});
  const [loading, setLoading] = useState(true);

  const apiURL = "https://machinist.smokingheaps.net/api";
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
          setCollectionData(data.data);
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

  function getPages() {
    let p = [];
    for (let i = 1; i < pages + 1; i++) {
      p.push({ page: i, active: currentPage === i });
    }
    return p;
  }

  return (
    <>
      <div className="grid grid-cols-3 self-center w-full divide-x divide-y divide-solid divide-black border-gray-900 border">
        {loading ? (
          "loading"
        ) : (
          <>
            {collectionData.length > 0 &&
              collectionData.slice(0, 9).map((item, idx) => {
                return (
                  <NWaysGridImage
                    item={item}
                    apiURL={apiURL}
                    collection={collection}
                    key={idx}
                  />
                );
              })}
          </>
        )}
      </div>

      <div className="italic mt-2 mb-6 w-100 text-center">{title}</div>
    </>
  );
}
