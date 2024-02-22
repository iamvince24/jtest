import React from "react";
import "./popupCart.scss";
import closeIcon from "../../assets/icon/close.svg";

export default function PopupCart({
  isOpenCart,
  globalCart,
  setGlobalCart,
  togglePopupCart,
}) {
  const removeFromCart = (indexToRemove) => {
    setGlobalCart((prevGlobalCart) =>
      prevGlobalCart.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className={`popup ${isOpenCart ? "show" : ""}`}>
      <div className={`popupCart ${isOpenCart ? "open" : ""}`}>
        <header>
          <img
            src={closeIcon}
            alt="closeIcon"
            className="closeIcon"
            style={{ visibility: "hidden" }}
          />
          <div>訂單資訊</div>
          <img
            src={closeIcon}
            alt="closeIcon"
            className="closeIcon iconBtnEffect"
            onClick={togglePopupCart}
          />
        </header>
        <div className="cartProducts">
          {globalCart &&
            globalCart.map((product, index) => {
              return (
                <div className="cartProduct">
                  <div className="cartProductHeader">
                    <div
                      className="cartProductInfo"
                      style={{ fontWeight: "600" }}
                    >
                      {product.name}
                    </div>
                    <img
                      src={closeIcon}
                      alt="closeIcon"
                      className="closeIcon iconBtnEffect"
                      onClick={() => {
                        removeFromCart(index);
                      }}
                    />
                  </div>
                  <div className="cartProductInfo">尺寸：{product.size}</div>
                  <div className="cartProductInfo">顏色：{product.color}</div>
                  <div className="cartProductInfo">數量：{product.number}</div>
                  <div className="cartProductInfo">
                    總金額：{product.price * product.number}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
