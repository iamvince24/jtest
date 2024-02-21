import React, { useState } from "react";
import "./actionBar.scss";
import cartIcon from "../../assets/icon/cartIcon.svg";
// import closeIcon from "../../assets/icon/close.svg";
// import plusIcon from "../../assets/icon/plus.svg";
// import subIcon from "../../assets/icon/sub.svg";
// import productImg from "../../assets/img/productImg.png";
import PopupWindow from "../popupWindow/popupWindow";

export default function ActionBar({ productData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [actionBtn, setActionBtn] = useState("");
  const [cart, setCart] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="actionBar">
        <div className="actionBarButtons">
          <div className="cartContainer">
            <div className="cartIcon">
              <img src={cartIcon} alt="Logo" />
              {cart.length === 0 ? null : <div>{cart.length}</div>}
            </div>
            <span>購物車</span>
          </div>
          <button
            className="addToCartBtn"
            onClick={(e) => {
              togglePopup();
              setActionBtn(e.target.innerHTML);
            }}
          >
            加入購物車
          </button>
          <button
            className="buyNowBtn"
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
        actionBtn={actionBtn}
        productData={productData}
      />
    </>
  );
}
