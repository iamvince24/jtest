import "./App.scss";
import Product from "./component/product/productDetail";
import NavigationBar from "./component/navigationBar/navigationBar";
import ActionBar from "./component/actionBar/actionBar";

const data = {
  products: {
    "000000": {
      name: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
      image: ["123", "124", "412312", "34324", "34324"],
      price: {
        up: 4699,
        down: 3699,
      },
      discount: 0.24,
      promotion: ["街口結帳享九折優惠", "訂單滿 399 免運費"],
      remark: [
        "請於訂單備註填寫您需要的球員",
        "球員搭配之號碼不可替換",
        "球員款客製訂單出貨需要十四個工作天",
      ],
      information: {
        category: {
          content: "這邊可以填寫純文字內容。",
        },
        description: {
          content:
            "靈感來自 90 年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        Remarks: {
          content:
            "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      },
      size: {
        s: {
          color: {
            black: { inventory: 5 },
            purple: { inventory: 5 },
            red: { inventory: 0 },
            yellow: { inventory: 5 },
            blue: { inventory: 5 },
          },
        },
        m: {
          color: {
            black: { inventory: 5 },
            purple: { inventory: 5 },
            red: { inventory: 0 },
            yellow: { inventory: 5 },
            blue: { inventory: 5 },
          },
        },
        l: {
          color: {
            black: { inventory: 5 },
            purple: { inventory: 5 },
            red: { inventory: 0 },
            yellow: { inventory: 5 },
            blue: { inventory: 5 },
          },
        },
        xl: {
          color: {
            black: { inventory: 5 },
            purple: { inventory: 5 },
            red: { inventory: 0 },
            yellow: { inventory: 5 },
            blue: { inventory: 5 },
          },
        },
        xxl: {
          color: {
            black: { inventory: 5 },
            purple: { inventory: 5 },
            red: { inventory: 0 },
            yellow: { inventory: 5 },
            blue: { inventory: 5 },
          },
        },
      },
    },
  },
};

function App() {
  const targetProduct = data.products["000000"];

  return (
    <div className="App">
      <NavigationBar />
      <Product targetProduct={targetProduct} />
      <ActionBar />
    </div>
  );
}

export default App;
