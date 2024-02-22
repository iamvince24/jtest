import React, { useState } from "react";
import "./App.scss";
import Product from "./component/product/product";
import NavigationBar from "./component/navigationBar/navigationBar";
import ActionBar from "./component/actionBar/actionBar";
import productImg from "./assets/img/productImg.png";

const data = {
  products: {
    "000000": {
      id: "000000",
      name: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
      image: [productImg, productImg, productImg, productImg, productImg],
      price: {
        discountAfter: {
          high: 3999,
          low: 2999,
        },
        discountBefore: {
          high: 4699,
          low: 3699,
        },
      },
      discount: 0.24,
      promotion: ["街口結帳享九折優惠", "訂單滿 399 免運費"],
      purchaseNotes: [
        "請於訂單備註填寫您需要的球員",
        "球員搭配之號碼不可替換",
        "球員款客製訂單出貨需要十四個工作天",
      ],
      information: [
        ["商品分類", "這邊可以填寫純文字內容。"],
        [
          "商品描述",
          "靈感來自 90 年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        ],
        [
          "商品備註",
          "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        ],
      ],
      specs: {
        S: [
          { specsName: "酷炫黑", inventory: 5 },
          { specsName: "紫旋風", inventory: 2 },
          { specsName: "暴風紅", inventory: 0 },
          { specsName: "耀眼黃", inventory: 5 },
          { specsName: "我是第二行選項", inventory: 4 },
        ],
        M: [
          { specsName: "酷炫黑", inventory: 5 },
          { specsName: "紫旋風", inventory: 0 },
          { specsName: "暴風紅", inventory: 2 },
          { specsName: "耀眼黃", inventory: 5 },
          { specsName: "我是第二行選項", inventory: 0 },
        ],
        L: [
          { specsName: "酷炫黑", inventory: 5 },
          { specsName: "紫旋風", inventory: 0 },
          { specsName: "暴風紅", inventory: 5 },
          { specsName: "耀眼黃", inventory: 5 },
          { specsName: "我是第二行選項", inventory: 5 },
        ],
        XL: [
          { specsName: "酷炫黑", inventory: 0 },
          { specsName: "紫旋風", inventory: 2 },
          { specsName: "暴風紅", inventory: 0 },
          { specsName: "耀眼黃", inventory: 1 },
          { specsName: "我是第二行選項", inventory: 5 },
        ],
        XXL: [
          { specsName: "酷炫黑", inventory: 5 },
          { specsName: "紫旋風", inventory: 0 },
          { specsName: "暴風紅", inventory: 0 },
          { specsName: "耀眼黃", inventory: 5 },
          { specsName: "我是第二行選項", inventory: 0 },
        ],
      },
      specsType: ["尺寸", "顏色"],
      specsN: [
        {
          specsName: "尺寸",
          specsType: ["S", "M", "L", "XL", "XXL"],
          inventory: { S: 5, M: 5, L: 5, XL: 5, XXL: 5 },
        },
      ],
    },
  },
};

function App() {
  const [globalCart, setGlobalCart] = useState([]);

  console.log(globalCart);

  const productData = data.products["000000"];

  return (
    <div className="App">
      <NavigationBar />
      <Product productData={productData} />
      <ActionBar
        productData={productData}
        globalCart={globalCart}
        setGlobalCart={setGlobalCart}
      />
    </div>
  );
}

export default App;
