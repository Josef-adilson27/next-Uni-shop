export async function GET(request) {
  const data = await fetch("http://localhost:4000/data");
  const res = await data.json();

  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const product = searchParams.get("products");

  ///если вести искать обе переменных то вернем:
  ///катгорию товара и массив соответсвующих products товаров одного одной продукци
  ///эти две переменные нужны для отображения товаров одной продукци  при запросе из **компонента поиска**
  if (category && product) {
    for (const key in res) {
      if (key === category) {
        ///если категория из res соответвстует переданной seacrchParam то:
        ///фильтруем его массив products на наличие свойство искомого product из seacrchParam
        let filtered = res[key].products.filter(
          (item) => item.make == product
        );
        return Response.json(filtered);
      }
    }
  } else {
    ///если вести только category то выведим все товары этой категории
    ///этf переменнfz нужнf для отображения ***всех товаров одной категори*** при переходе в категория товара
    if (category) {
      for (const key in res) {
        if (key === category) {
          return Response.json(res[key].products);
        }
      }
    }
  }
}
