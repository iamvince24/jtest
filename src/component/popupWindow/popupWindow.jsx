import React, { useState } from "react";
import "./popupWindow.scss";
import closeIcon from "../../assets/icon/close.svg";

export default function PopupWindow({
  isOpen,
  togglePopup,
  togglePopupCart,
  actionBtn,
  productData,
  setGlobalCart,
}) {
  const specsArray = Object.keys(productData.specs);
  const [sizeFocus, setSizeFocus] = useState(
    Object.keys(productData.specs).length === 0
      ? ""
      : Object.keys(productData.specs)[0]
  );
  const [colorFocus, setColorFocus] = useState(
    Object.keys(productData.specs).length === 0
      ? ""
      : productData.specs[specsArray[0]][0].specsName
  );

  const [value, setValue] = useState(1);
  const [cartInfo, setCartInfo] = useState({
    productsId: productData.id,
    name: productData.name,
    size: sizeFocus,
    color: colorFocus,
    price: productData.price.discountAfter.high,
    number: value,
    total: 0,
  });

  const handleDecrease = () => {
    setValue((prevValue) => prevValue - 1);
    updateNumber(value - 1);
  };

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
    updateNumber(value + 1);
  };

  const handleChange = (event) => {
    setValue(parseInt(event.target.value) || 0);
    updateNumber(event.target.value);
  };

  // 判斷某此寸是否有庫存
  function checkInventory(data) {
    for (const item of data) {
      if (item.inventory !== 0) {
        return false;
      }
    }
    return true;
  }

  // 找顏色的 index
  const findColorIndexByName = (data, targetColorName) => {
    const foundIndex = data.findIndex(
      (item) => item.specsName === targetColorName
    );
    return foundIndex === -1 ? null : foundIndex;
  };

  // 更新 size
  const updateSize = (newSize) => {
    setCartInfo((prevCartInfo) => ({
      ...prevCartInfo,
      size: newSize,
    }));
  };
  // 更新 color
  const updateColor = (newColor) => {
    setCartInfo((prevCartInfo) => ({
      ...prevCartInfo,
      color: newColor,
    }));
  };
  // 更新 number
  const updateNumber = (newNumber) => {
    console.log(newNumber);
    setCartInfo((prevCartInfo) => ({
      ...prevCartInfo,
      number: newNumber,
    }));
  };

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
            className="closeIcon iconBtnEffect"
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
              {specsArray.map((sizeType) => {
                return (
                  <button
                    key={sizeType}
                    onClick={(e) => {
                      setSizeFocus(e.target.innerHTML);
                      updateSize(e.target.innerHTML);
                    }}
                    className={`infoBtn specsBtnEffect ${
                      checkInventory(productData.specs[sizeType])
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
              {productData.specs[sizeFocus]?.map((colorType) => {
                return (
                  <button
                    key={colorType.specsName}
                    onClick={(e) => {
                      setColorFocus(e.target.innerHTML);
                      updateColor(e.target.innerHTML);
                    }}
                    className={`infoBtn specsBtnEffect ${
                      colorType.inventory === 0 ? "infoBtnNone" : ""
                    }
                    ${
                      colorFocus === colorType.specsName ? "infoBtnFocus" : ""
                    }`}
                  >
                    {colorType.specsName}
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
              <button
                className="numberBtn"
                onClick={handleDecrease}
                disabled={value <= 1}
              >
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
              </button>
              <input type="text" value={value} onChange={handleChange} />
              <button
                className="numberBtn"
                onClick={handleIncrease}
                disabled={
                  value >=
                  productData.specs[sizeFocus][
                    findColorIndexByName(
                      productData.specs[sizeFocus],
                      colorFocus
                    )
                  ].inventory
                }
              >
                <svg
                  className={` ${
                    value >=
                    productData.specs[sizeFocus][
                      findColorIndexByName(
                        productData.specs[sizeFocus],
                        colorFocus
                      )
                    ].inventory
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
              </button>
            </div>
          </div>
          <div className="purchaseBtnContainer">
            <button
              className="purchaseBtn buttonEffect"
              onClick={() => {
                setGlobalCart((prevGlobalCart) => [
                  ...prevGlobalCart,
                  cartInfo,
                ]);
                togglePopup();
                if (actionBtn === "加入購物車") {
                  togglePopupCart();
                }
              }}
            >
              {actionBtn}
            </button>
          </div>
          <div style={{ width: "100%", height: "34px" }}></div>
        </div>
      </div>
    </div>
  );
}
