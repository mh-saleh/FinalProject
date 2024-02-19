import ReactPaginate from "react-paginate";
import Items from "./Items";
import { useState } from "react";

export default function PaginatedItems({ itemsPerPage, items }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  console.log(currentItems);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    const newOffset = selected * itemsPerPage;
    setItemOffset(newOffset);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        nextLinkClassName="py-2 px-3 border-[3px] border-black"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageLinkClassName="py-2 px-3 border-[3px] border-black"
        pageCount={pageCount}
        previousLabel="Previous"
        previousLinkClassName="py-2 px-3 border-[3px] border-black"
        renderOnZeroPageCount={null}
        className="flex justify-center gap-4 mt-20 mb-20"
      />
    </>
  );
}
