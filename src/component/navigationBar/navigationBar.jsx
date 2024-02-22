import "./navigationBar.scss";
import leftSideIcon from "../../assets/icon/leftSideIcon.svg";

export default function NavigationBar() {
  return (
    <div className="navigationBar">
      <div className="navigationBarTitle">
        <div className="iconContainer">
          <div className="iconBtnEffect">
            <img src={leftSideIcon} alt="Logo" />
          </div>
        </div>
        <div className="title">街口攻城獅官方商城</div>
        <div className="iconContainer"></div>
      </div>
    </div>
  );
}
