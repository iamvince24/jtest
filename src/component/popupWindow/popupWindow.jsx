import React, { useState } from "react";
import "./popupWindow.scss";
import productImg from "../../assets/img/productImg.png";
import closeIcon from "../../assets/icon/close.svg";

export default function PopupWindow({
  isOpen,
  togglePopup,
  actionBtn,
  productData,
}) {
  const [sizeFocus, setSizeFocus] = useState(
    Object.keys(productData.size).length === 0
      ? ""
      : Object.keys(productData.size)[0]
  );
  const [colorFocus, setColorFocus] = useState("");
  const [value, setValue] = useState(1);

  const handleDecrease = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleChange = (event) => {
    setValue(parseInt(event.target.value) || 0);
  };

  console.log();

  const sizeArray = Object.keys(productData.size);

  // console.log(productData.size.S);

  function checkInventory(data) {
    for (const item of data) {
      if (item.inventory !== 0) {
        return false;
      }
    }
    return true;
  }

  return (
    <div className={`popup ${isOpen ? "show" : ""}`}>
      <div className={`popupWindow ${isOpen ? "open" : ""}`}>
        <div className="header">
          <img src={productData.image[0]} alt="Logo" />
          <div className="description">
            <div className="title">{productData.name}</div>
            <div className="price">
              <span>$</span>
              {productData.price.discountAfter.high.toLocaleString()}
            </div>
          </div>
          <img
            src={closeIcon}
            alt="Logo"
            className="closeIcon"
            onClick={togglePopup}
          />
        </div>
        <div className="dividePop">
          <hr className="dividePopLine" />
        </div>
        <div className="infoContainer">
          <div className="info">
            <div className="infoTitle">
              <div className="title">尺寸</div>
              <div className="details">補充說明</div>
            </div>
            <div className="infoBtnContainer">
              {sizeArray.map((sizeType) => {
                return (
                  <button
                    key={sizeType}
                    onClick={(e) => {
                      setSizeFocus(e.target.innerHTML);
                    }}
                    className={`infoBtn ${
                      checkInventory(productData.size[sizeType])
                        ? "infoBtnNone"
                        : ""
                    } ${sizeFocus === sizeType ? "infoBtnFocus" : ""}`}
                  >
                    {sizeType}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="info">
            <div className="infoTitle">
              <div className="title">顏色</div>
              <div className="details">補充說明</div>
            </div>
            <div className="infoBtnContainer">
              {productData.size[sizeFocus]?.map((colorType) => {
                return (
                  <button
                    key={colorType.colorName}
                    onClick={(e) => {
                      setColorFocus(e.target.innerHTML);
                    }}
                    className={`infoBtn  ${
                      colorType.inventory === 0 ? "infoBtnNone" : ""
                    }
                    ${
                      colorFocus === colorType.colorName ? "infoBtnFocus" : ""
                    }`}
                  >
                    {colorType.colorName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="dividePop">
          <hr className="dividePopLine" />
        </div>
        <div className="purchaseBar">
          <div className="purchaseNumber">
            <div className="title">購買數量</div>
            <div className="container">
              <div className="numberBtn" onClick={handleDecrease}>
                <svg
                  className={`${value <= 1 ? "forbidBtn" : "allowBtn"}`}
                  width="13"
                  height="4"
                  viewBox="0 0 13 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                    d="M0.699951 1.99995C0.699951 1.28198 1.28198 0.699951 1.99995 0.699951H11.6365C12.3545 0.699951 12.9365 1.28198 12.9365 1.99995C12.9365 2.71792 12.3545 3.29995 11.6365 3.29995H1.99995C1.28198 3.29995 0.699951 2.71792 0.699951 1.99995Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </div>
              <input type="text" value={value} onChange={handleChange} />
              <div className="numberBtn" onClick={handleIncrease}>
                <svg
                  className={` ${
                    value >= productData.size[sizeFocus][0].inventory
                      ? "forbidBtn"
                      : "allowBtn"
                  }`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                    d="M4.6665 10.6332C4.6665 11.3512 5.24854 11.9332 5.96651 11.9332C6.68447 11.9332 7.26651 11.3512 7.26651 10.6332V7.26655H10.6332C11.3512 7.26655 11.9332 6.68452 11.9332 5.96655C11.9332 5.24858 11.3512 4.66655 10.6332 4.66655H7.26651V1.3C7.26651 0.58203 6.68448 0 5.96651 0C5.24854 0 4.66651 0.58203 4.66651 1.3V4.66655H1.3C0.58203 4.66655 0 5.24858 0 5.96655C0 6.68452 0.58203 7.26655 1.3 7.26655H4.6665V10.6332Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="purchaseBtnContainer">
            <button className="purchaseBtn">{actionBtn}</button>
          </div>
          <div style={{ width: "100%", height: "34px" }}></div>
        </div>
      </div>
    </div>
  );
}
