import React from "react";

export default function NWaysPagination({
  pages,
  setCurrentPage,
  currentPage,
  setCurrentImage,
}) {
  function getPages() {
    let p = [];
    for (let i = 1; i < pages + 1; i++) {
      p.push({ page: i, active: currentPage === i });
    }
    return p;
  }
  return (
    <div className="flex my-5 justify-center ">
      {getPages().map((page) => (
        <button
          key={page.page}
          id={page.page}
          className={`w-[20px] h-[20px] rounded-full mx-2 ${
            parseInt(currentPage, 10) === parseInt(page.page, 10)
              ? "bg-black"
              : "border border-black"
          } hover:bg-black duration-300 hover:shadow-lg`}
          onClick={() => {
            setCurrentPage(page.page);
            setCurrentImage(null);
          }}
        />
      ))}
    </div>
  );
}
