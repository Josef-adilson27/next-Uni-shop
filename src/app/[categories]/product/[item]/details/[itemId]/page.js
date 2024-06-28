import MainCarDetails from "@/app/components/cars/carDetails/MainDetails";
import MainPhoneDetails from "@/app/components/phones/phoneDetails/MainDetails";

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

  ///здесь динамически подставляем компонент для отображения товаров согласно переданным данным (т.е params.categories и itemId )

  const ComponentsRender = () => {
    switch (params.categories) {
      case "cars":
        return <MainCarDetails data={data} />;
      case "phones":
        return <MainPhoneDetails data={data} />;
      default:
        return <NotFound />;
    }
  };

  return <div>{ComponentsRender()}</div>;
};

export default Page;
