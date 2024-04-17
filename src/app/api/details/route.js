export async function GET(request) {
  const data = await fetch("http://localhost:4000/data", { cache: "no-store" });
  const res = await data.json();

  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");

  const id = searchParams.get("id");

  let arrayOfProducts = [];

  for (const key in res) {
    if(key===category){
     arrayOfProducts = res[key].products
    }
  }

  const Item = arrayOfProducts.filter(item=>item.id===id);

  return Response.json(Item);

}
