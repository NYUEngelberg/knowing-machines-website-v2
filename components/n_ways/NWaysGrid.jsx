import React, { useEffect, useState } from "react";

export default function NWaysGrid({ title, collection }) {
  const [collectionData, setCollectionData] = useState({});
  const [loading, setLoading] = useState(true);
  const apiURL = "https://machinist.smokingheaps.net//api";
  useEffect(() => {
    const fetchImages = async (collection) => {
      fetch(`${apiURL}/collections/${collection}/data`)
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
  return (
    <>
      <div className="grid grid-cols-3 self-center w-full">
        {loading ? (
          "loading"
        ) : (
          <>
            {collectionData.length > 0 &&
              collectionData.slice(0, 9).map((item, idx) => {
                return (
                  <div
                    className="aspect-square bg-cover flex flex-col justify-end text-white items-end px-2 py-2"
                    key={idx}
                    style={{
                      backgroundImage: `url("${apiURL}/collections/${collection}/files/${item.files[0].id}")`,
                    }}
                  >
                    {item.id}
                  </div>
                );
              })}
          </>
        )}
      </div>
      <div className="italic mt-2 mb-6 w-100 text-center">{title}</div>
    </>
  );
}
