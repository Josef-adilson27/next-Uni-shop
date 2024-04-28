
import style from "./index.module.css";


///не докончен


const paymentPanel = (
  <div className="flex w-[300px] text-white bg-[rgb(4,_6,_58)]">
    <div className="flex flex-col  w-full">
      <div className="flex items-center justify-center w-full h-[100px]">
        <div className="">
          <h1>Have coupon?</h1>
          <input type="text" className="h-[40px]" />
          <button className=" px-2 h-[40px]">Aplly</button>
        </div>
      </div>
      <div className="w-full   p-2">
        <div className="py-2">
          <div className="flex justify-between py-2">
            <p>Total price:</p>
            <p>USD 102</p>
          </div>
          <div className="flex justify-between py-2">
            <p>Discount:</p>
            <p>USD 0</p>
          </div>
          <div className="flex justify-between py-2">
            <p>Total:</p>
            <p>USD 3000</p>
          </div>
        </div>
        <hr />
        <div className=" flex justify-around ">
          <img className="w-[70px]" src={"/visa.png"} alt="" />
          <img className="w-[70px]" src={"/master.png"} alt="" />
        </div>
      </div>
    </div>
  </div>
);

const productCards = (
  <>
    {/* {cars?.map((item) => (
      <div className="w-[200px] h-[200px] flex justify-center items-center flex-col">
        <img src={item.img}></img>
        <p>sdfs</p>
      </div>
    ))} */}
  </>
);

const Page = () => {
  return (
    <div className={style.mainGrid}>
      <div className={style.div1}>
        <div className={style.productGrid}>{productCards}</div>
      </div>
      <div className={style.div2}>{paymentPanel}</div>
    </div>
  );
};
export default Page;
