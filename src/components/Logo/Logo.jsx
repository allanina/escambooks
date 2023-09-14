import MothIcon from "../../assets/moth-icon.svg";

function Logo() {
  return (
    <div className="logo-container">
      <img src={MothIcon} className="logo-moth-icon" />
      <h1 className="logo-text">escambooks</h1>
    </div>
  );
}

export default Logo;
