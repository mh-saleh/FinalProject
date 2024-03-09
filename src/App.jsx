import ProductCard from "./components/ProductCard/ProductCard";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cartpage from "./components/pages/Cartpage/Cartpage";
import Items from "./assets/ProductList/products";
import PaginatedItems from "./components/Pagination/PaginatedItems";
import { useDispatch, useSelector } from "react-redux";
import Favourite from "./components/pages/Favourite/Favourite";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Error from "./components/pages/Error/Error";
import Details from "./components/pages/Details/Details";
function App() {
  console.log(Items);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/shop" element={<Cartpage />} />
        <Route path="/shop#inputSearch" element={<Cartpage />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="*" element={<Error />} />
        {Items.map((item) => (
          <Route path={`/product${item.id}`} element={<Details />} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
