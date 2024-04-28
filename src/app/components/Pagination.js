import React from "react";

const Pagination = ({ dataPerPage, totalData,paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex  my-1 justify-center  ">
      {pageNumbers.map((number) => (
        <p className="w-8 h-8 bg-orange-500 rounded-3xl flex justify-center items-center" key={number} onClick={() => paginate(number)}>{number}</p>
      ))}
    </nav>
  );
};

export default Pagination;
