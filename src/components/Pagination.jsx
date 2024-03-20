// Pagination.js
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="mt-4 flex justify-center items-center">
      <span
        className={`cursor-pointer ${
          currentPage === 1 ? "text-gray-400" : "text-gray-800"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FaArrowLeft />
      </span>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <span
          key={pageNumber}
          className={`mx-1 cursor-pointer ${
            currentPage === pageNumber
              ? "text-gray-950 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      <span
        className={`cursor-pointer ${
          currentPage === totalPages ? "text-gray-400" : "text-gray-800"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FaArrowRight />
      </span>
    </div>
  );
};

export default Pagination;
