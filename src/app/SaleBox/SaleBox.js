import React from "react";
import style from "./index.module.css";

const SaleBox = () => {
  return (
    <div className={style.parent}>
      <div className={style.div1}>
        <img className={style.image} src="/saleBox_assets/sale.jpg" alt="" />
      </div>
      <div className={style.div2}>
        <img className={style.image} src="/saleBox_assets/sale2.jpg" alt="" />
      </div>
      <div className={style.div3}>
        <img className={style.image} src="/saleBox_assets/sale2.jpg" alt="" />
      </div>
    </div>
  );
};

export default SaleBox;
