import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";

const Favourite = () => {
  let items = useSelector((state) => state.Cart.cartItems);

  return (
    <section className="my-10 max-w-[1600px] mx-auto">
      <div className="flex justify-center gap-3 flex-wrap">
        {items
          .filter((item) => {
            return item.Wishlist && item;
          })
          .map((item) => (
            <div key={item.id}>
              <ProductCard Index={item.id} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Favourite;
