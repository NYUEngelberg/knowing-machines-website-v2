import React, { useEffect, useState } from "react";
import NWaysGridImage from "./NWaysGridImage";

export default function NWaysGrid({ title, collection }) {
  const [collectionData, setCollectionData] = useState({});
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSet, setCurrentSet] = useState([]);

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

    setCurrentSet(!loading && collectionData.slice(start, end));
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
            {currentSet.length > 0 &&
              currentSet.map((item, idx) => {
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
      {pages > 1 && (
        <div className="flex my-5 justify-end">
          {getPages().map((page) => (
            <>
              <button
                key={page.page}
                id={page.page}
                className={`w-[24px] h-[24px] rounded-full mx-2 ${
                  parseInt(currentPage, 10) === parseInt(page.page, 10)
                    ? "bg-black"
                    : "bg-gray-300"
                } hover:bg-black duration-300 hover:shadow-lg`}
                onClick={() => setCurrentPage(page.page)}
              />
            </>
          ))}
        </div>
      )}
      <div className="italic mt-2 mb-6 w-100 text-center">{title}</div>
    </>
  );
}
