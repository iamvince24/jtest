import React, { useState } from "react";
import "./actionBar.scss";
import cartIcon from "../../assets/icon/cartIcon.svg";
import PopupWindow from "../popupWindow/popupWindow";
import PopupCart from "../popupCart/popupCart";

export default function ActionBar({ productData, globalCart, setGlobalCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [actionBtn, setActionBtn] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopupCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <>
      <div className="actionBar">
        <div className="actionBarButtons">
          <div className="cartContainer">
            <div className="cartIcon iconBtnEffect" onClick={togglePopupCart}>
              <img src={cartIcon} alt="Logo" />
              {globalCart.length === 0 ? null : <div>{globalCart.length}</div>}
            </div>
            <span>購物車</span>
          </div>
          <button
            className="addToCartBtn buttonEffect"
            onClick={(e) => {
              togglePopup();
              setActionBtn(e.target.innerHTML);
            }}
          >
            加入購物車
          </button>
          <button
            className="buyNowBtn buttonEffect"
            onClick={(e) => {
              togglePopup();
              setActionBtn(e.target.innerHTML);
            }}
          >
            直接購買
          </button>
        </div>
        <div style={{ width: "100%", height: "34px" }}></div>
      </div>

      <PopupWindow
        isOpen={isOpen}
        togglePopup={togglePopup}
        togglePopupCart={togglePopupCart}
        actionBtn={actionBtn}
        productData={productData}
        setGlobalCart={setGlobalCart}
      />
      <PopupCart
        isOpenCart={isOpenCart}
        globalCart={globalCart}
        setGlobalCart={setGlobalCart}
        togglePopupCart={togglePopupCart}
      />
    </>
  );
}
