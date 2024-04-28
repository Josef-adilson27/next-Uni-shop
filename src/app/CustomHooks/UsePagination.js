
import { useState } from "react";

export default function UseNavigation(data){

  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage] = useState(8);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const indexOfLastProduct = currentPage * DataPerPage;
  const indexOfFirstProduct = indexOfLastProduct - DataPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return{
    paginate,
    currentProducts, 
    DataPerPage,
    DataLength: data.length
  }

}
