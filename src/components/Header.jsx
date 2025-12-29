import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className="header-content">
      <h1 className="heading">
        <Link to={"/"}>{title}</Link>
      </h1>
      <div className="header-links">
        <Link to={"/posts"}>게시판</Link>
        <span>|</span>
        <Link to={"/write"}>글쓰기</Link>
      </div>
    </div>
  );
};
export default Header;
