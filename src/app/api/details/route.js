export async function GET(request) {

  const data = await fetch("http://localhost:4000/data");
  const res = await data.json();

  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const id = searchParams.get("id");

  for (const key in res) {
    if(key===category){ 
     return Response.json(
      res[key].products.filter(item=>item.id===id)
    )
    }
  }
  
  
  

}
