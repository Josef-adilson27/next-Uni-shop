import SaleBox from "./SaleBox/SaleBox";
import CategoriesBox from "./components/categoriesBox/CategoriesBox";
import SearchBox from "./components/searchComponent/SearchBox";
import Searchbar from "./components/searchComponent/ItemsSearch";

export default function Home() {
  return (
    <main className="">
      <SaleBox />
      <SearchBox />
      <CategoriesBox />
    </main>
  );
}
