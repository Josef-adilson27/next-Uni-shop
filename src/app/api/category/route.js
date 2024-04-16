

export async function GET(request) {

  const data = await fetch('http://localhost:4000/data',{cache:'no-store'});
  const res = await data.json();

  const {searchParams} = new URL(request.url);
  const name = searchParams.get('name');


 for (const key in res) {
  if(key === name){
    return Response.json(res[key])
  }
 }
}
