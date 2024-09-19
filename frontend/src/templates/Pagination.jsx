import React, { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  return (
    <div className="pagination flex justify-center items-center mt-4 space-x-2">
      {/* Previous Button */}
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="px-3 py-1 text-gray-500 text-xl rounded hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => changePage(index + 1)}
          className={`text-xl px-3 py-1 rounded ${
            currentPage === index + 1
              ? 'text-black'
              : 'text-gray-500 hover:text-black'
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="page-numbers text-xl"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
