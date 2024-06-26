import CarsList from "../components/cars/CarsList";
import PhonesList from "../components/phones/PhonesList.js";
import NotFound from "../components/NotFound.js";

  //данный page динамический подставляет компоненты списка товаров в зависимости от searchParams (см. console.log(searchParams) )

const Page = async ({ searchParams }) => {

  const category = searchParams.category;
  const product = searchParams.item;
  let URL = ''

  //переменные (category, product):
  //1.сategory - переменная подставлятеся при обычном переходе в категорию 

  //2.product  - переменная подставлятеся для фильтрации категории по названию товаров (т.е из searchComponent/ItemsSearch )

  if(category&&product){
    // получаем и фильтруем категорию по названию
    URL = `http://localhost:3000/api/category?category=${category}&products=${product}`
  }else{
    // получаем просто всю категорию
    URL = `http://localhost:3000/api/category?category=${category}`
  }

  const get = async () => {
    const data = await fetch( URL,{ cache: "no-store" });
    const res = data.json();
    return res;
  };

  const data = await get();


  ///здесь динамически подставляем компонент для отображения товаров согласно переданным данным (т.е categories category и product )
  const ComponentsRender = () => {
    switch (searchParams.category) {
      case "cars":
        return <CarsList  data={data}/>;
      case "phones":
        return <PhonesList data={data}/>;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="grid  gap-[10px] grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] justify-items-center">
      {ComponentsRender()} 
    </div>
  );
};

export default Page;
