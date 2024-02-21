import "./productInfoMain.scss";

export default function ProductInfoMain({ productData }) {
  // console.log(productData.purchaseNotes);

  return (
    <div className="productInfoMain">
      <div className="title">{productData.name}</div>
      <div className="priceContainer">
        <div className="discountAfter">
          <span>$</span>
          {productData.price.discountAfter.low.toLocaleString()} -{" "}
          <span>$</span>
          {productData.price.discountAfter.high.toLocaleString()}
        </div>
        <div className="discountBefore">
          <span>$</span>
          {productData.price.discountBefore.low.toLocaleString()} -{" "}
          <span>$</span>
          {productData.price.discountBefore.high.toLocaleString()}
        </div>
      </div>
      <div className="labelsContainer">
        {productData.promotion &&
          productData.promotion.map((text) => {
            return (
              <div className="labels" key={text}>
                {text}
              </div>
            );
          })}
      </div>
      {productData.purchaseNotes.length === 0 ? null : (
        <>
          <div className="divide">
            <hr />
          </div>
          <div className="purchaseNotesContainer">
            <ul className="purchaseNotes">
              {productData.purchaseNotes &&
                productData.purchaseNotes.map((text) => {
                  return (
                    <li className="note" key={text}>
                      {text}
                    </li>
                  );
                })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
