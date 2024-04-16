import Link from "next/link";
import Cars from "../components/categoriesComponents/Cars.js";
import Phones from "../components/categoriesComponents/Phones.js";
import NotFound from "../components/categoriesComponents/NotFound.js";

const Page = async ({ params }) => {

  const get = async () => {
    const data = await fetch(
      `http://localhost:3000/api/category?name=${params.categories}`,
      { cache: "no-store" }
    );
    const res = data.json();
    return res;
  };

  const ComponentsRender = () => {
    switch (params.categories) {
      case "cars":
        return <Cars category={params.categories}  data={a} />;
      case "phones":
        return <Phones category={params.categories} data={a} />;
      default:
        return <NotFound />;
    }
  };

  const a = await get();
  
  return (
    <div className="grid gap-[10px] grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] justify-items-center">
      {ComponentsRender()}
    </div>
  );
};

export default Page;
