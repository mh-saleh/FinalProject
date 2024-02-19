import React, { useState } from "react";
import Container from "../../Container";
import ProductCard from "../../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import PaginatedItems from "../../Pagination/PaginatedItems";
import { updateSearch } from "../../../Redux/slices/search";

const Cartpage = () => {
  let items = useSelector((state) => state.Cart.cartItems);
  let searches = useSelector((state) => state.Search.search);
  let dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  console.log(searches);

  return (
    <section className="my-10 max-w-[1600px] mx-auto">
      <div className="mx-auto text-center">
        <input
          id="inputSearch"
          type="search"
          className="border-[2px] max-w-[30%] h-14 box-border py-1 px-2 font-semibold   w-full inline-block rounded-lg text-[22px]"
          onChange={handleSearchChange}
          placeholder="Search"
          autoFocus
        />
      </div>
      <div>
        <PaginatedItems items={items} itemsPerPage={9} />
      </div>
    </section>
  );
};

export default Cartpage;
