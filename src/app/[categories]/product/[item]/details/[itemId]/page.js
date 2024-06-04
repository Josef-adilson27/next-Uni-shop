import CarsDetails from "@/app/components/cars/CarsDetails";
import PhonesDetails from "@/app/components/phones/phoneDetails/PhonesDetails";

//данный page динамический подставляет компонент Details в зависимости от searchParams (см. console.log(searchParams) )

const Page = async ({ params }) => {
  const get = async () => {
    const data = await fetch(
      `http://localhost:3000/api/details?category=${params.categories}&id=${params.itemId}`,
      { cache: "no-store" }
    );
    return data.json();
  };

  const data = await get();

  ///здесь динамически подставляем компонент для отображения товаров

  const ComponentsRender = () => {
    switch (params.categories) {
      case "cars":
        return <CarsDetails data={data} />;
      case "phones":
        return <PhonesDetails data={data} />;
      default:
        return <NotFound />;
    }
  };

  return <div>{ComponentsRender()}</div>;
};

export default Page;
