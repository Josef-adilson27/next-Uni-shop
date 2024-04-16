import SaleBox from "./SaleBox/SaleBox"
import CategoriesBox from "./components/categoriesBox/CategoriesBox"

export default   function Home() {
 

  return (
    <main className="">
      <SaleBox />
      <div className="flex items-start justify-between py-2">
        <div className="flex max-sm:flex-col gap-2 ">
        </div>
      </div>
      <CategoriesBox/>
    
    </main>
  )
}
