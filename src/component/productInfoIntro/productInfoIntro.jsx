import { Fragment } from "react";
import "./productInfoIntro.scss";

export default function ProductInfoIntro({ productData }) {
  // console.log(productData.information[0]);

  return (
    <>
      {productData.information.length === 0 ? null : (
        <div className="productInfoIntro">
          {productData.information.map((item, index) => (
            <Fragment key={item[0]}>
              <div className="productInfoContainer">
                <div className="title">{item[0]}</div>
                <div className="caption">{item[1]}</div>
              </div>
              {index < productData.information.length - 1 && (
                <div className="divide">
                  <hr />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
}
