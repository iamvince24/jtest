import "./product.scss";
import ProductImgContainer from "../productImgContainer/productImgContainer";
import ProductInfoMain from "../productInfoMain/productInfoMain";
import ProductInfoIntro from "../productInfoIntro/productInfoIntro";

export default function Product({ productData }) {
  // console.log(productData);

  return (
    <div className="product">
      <ProductImgContainer imgData={productData.image} />
      <div className="productInfo">
        <ProductInfoMain productData={productData} />
        <ProductInfoIntro productData={productData} />
      </div>
    </div>
  );
}
