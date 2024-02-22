import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

export default function Items({ currentItems }) {
  return (
    <>
      <div className="flex justify-center gap-3 flex-wrap">
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.id}>
              <ProductCard Index={item.id} />
            </div>
          ))}
      </div>
    </>
  );
}
