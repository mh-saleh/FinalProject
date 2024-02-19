import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

export default function Items({ currentItems }) {
  let searches = useSelector((state) => state.Search.search);
  return (
    <>
      <div className="flex justify-center gap-3 flex-wrap">
        {currentItems &&
          currentItems
            .filter((item) => {
              const searchTerm = searches.toLowerCase();
              const itemName = item.Name.toLowerCase();
              return itemName.includes(searchTerm);
            })
            .map((item) => (
              <div key={item.id}>
                <ProductCard Index={item.id} />
              </div>
            ))}
      </div>
    </>
  );
}
