import "./actionBar.scss";
import cartIcon from "../../assets/icon/cartIcon.svg";
import closeIcon from "../../assets/icon/close.svg";
import plusIcon from "../../assets/icon/plus.svg";
import subIcon from "../../assets/icon/sub.svg";

export default function ActionBar() {
  return (
    <>
      <div className="actionBar">
        <div className="actionBarButtons">
          <div className="cartContainer">
            <div className="cartIcon">
              <img src={cartIcon} alt="Logo" />
              <div>1</div>
            </div>
            <span>購物車</span>
          </div>
          <button className="addToCartBtn">加入購物車</button>
          <button className="buyNowBtn">直接購買</button>
        </div>
        <div style={{ width: "100%", height: "34px" }}></div>
      </div>

      <div className="popup">
        <div className="popupWindow">
          <div className="header">
            <img src={cartIcon} alt="Logo" />
            <div className="description">
              <div className="title">
                LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列
              </div>
              <div className="price">
                <span>$</span>3,999
              </div>
            </div>
            <img src={closeIcon} alt="Logo" className="closeIcon" />
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
                <button className="infoBtn">S</button>
                <button className="infoBtn">S</button>
                <button className="infoBtn">S</button>
                <button className="infoBtn infoBtnSelect">S</button>
                <button className="infoBtn infoBtnNone">XXL</button>
              </div>
            </div>
            <div className="info">
              <div className="infoTitle">
                <div className="title">顏色</div>
                <div className="details">補充說明</div>
              </div>
              <div className="infoBtnContainer">
                <button className="infoBtn">酷炫黑</button>
                <button className="infoBtn">紫旋風</button>
                <button className="infoBtn">暴風紅</button>
                <button className="infoBtn infoBtnSelect">耀眼黃</button>
                <button className="infoBtn infoBtnNone">我是第二行選項</button>
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
                <div className="numberBtn">
                  <svg
                    className="forbidBtn"
                    width="13"
                    height="4"
                    viewBox="0 0 13 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.699951 1.99995C0.699951 1.28198 1.28198 0.699951 1.99995 0.699951H11.6365C12.3545 0.699951 12.9365 1.28198 12.9365 1.99995C12.9365 2.71792 12.3545 3.29995 11.6365 3.29995H1.99995C1.28198 3.29995 0.699951 2.71792 0.699951 1.99995Z"
                      fill="white"
                      fill-opacity="0.1"
                    />
                  </svg>
                </div>
                <input type="number" id="fname" name="fname" value={1} />
                <div className="numberBtn">
                  <svg
                    className="allowBtn"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.6665 10.6332C4.6665 11.3512 5.24854 11.9332 5.96651 11.9332C6.68447 11.9332 7.26651 11.3512 7.26651 10.6332V7.26655H10.6332C11.3512 7.26655 11.9332 6.68452 11.9332 5.96655C11.9332 5.24858 11.3512 4.66655 10.6332 4.66655H7.26651V1.3C7.26651 0.58203 6.68448 0 5.96651 0C5.24854 0 4.66651 0.58203 4.66651 1.3V4.66655H1.3C0.58203 4.66655 0 5.24858 0 5.96655C0 6.68452 0.58203 7.26655 1.3 7.26655H4.6665V10.6332Z"
                      fill="white"
                      fill-opacity="0.9"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="purchaseBtnContainer">
              <button className="purchaseBtn">直接購買</button>
            </div>
            <div style={{ width: "100%", height: "34px" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
