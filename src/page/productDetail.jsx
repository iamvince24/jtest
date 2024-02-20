import "./productDetail.scss";
import leftSideIcon from "../assets/icon/leftSideIcon.svg";

export default function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="navigationBar">
        <div className="navigationBarTitle">
          <div className="iconContainer">
            <div>
              <img src={leftSideIcon} alt="Logo" />
            </div>
          </div>
          <div className="title">街口攻城獅官方商城</div>
          <div className="iconContainer"></div>
        </div>
      </div>

      <div className="product">
        <div className="productImgContainer">
          <div className="productImgTag">
            <span className="productImgTagNumber">1/5</span>
          </div>
        </div>

        <div className="productInfo">
          <div className="productInfo1">
            <div className="title">
              LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列
            </div>
            <div className="priceContainer">
              <div className="priceCaption">$2,999 - $3,999 </div>
              <div className="priceCaption">$3,699 - $4,699</div>
            </div>
            <div className="labelsContainer">
              <div className="labels">labelsContainer</div>
            </div>
            <hr />
            <ul className="textContainer">
              <li className="text">請於訂單備註填寫您需要的球員</li>
              <li className="text">球員搭配之號碼不可替換</li>
              <li className="text">球員款客製訂單出貨需要十四個工作天</li>
            </ul>
          </div>

          <div className="productInfo2">
            <div className="productInfoContainer">
              <div className="title">商品分類</div>
              <div className="caption">這邊可以填寫純文字內容。</div>
            </div>
            <div className="productInfoContainer">
              <div className="title">商品描述</div>
              <div className="caption">
                靈感來自 90
                年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。
              </div>
            </div>
            <div className="productInfoContainer">
              <div className="title">商品備註</div>
              <div className="caption">
                請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="actionBar">
        <button>加入購物車</button>
        <button>直接購買</button>
      </div>
    </div>
  );
}
