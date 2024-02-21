import "./productImgContainer.scss";

export default function ProductImgContainer({ imgData }) {
  // console.log(imgData);

  return (
    <div className="productImgContainer">
      <img src={imgData[0]} alt="Logo" />
      <div className="productImgTag">
        <span className="productImgTagNumber">1/5</span>
      </div>
    </div>
  );
}
