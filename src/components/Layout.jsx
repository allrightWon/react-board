import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/") return "홈";
    if (location.pathname === "/posts") return "게시글 목록";
    if (location.pathname.startsWith("/posts/")) return "게시글 상세";
    if (location.pathname === "/write") return "글 작성";
    if (location.pathname.startsWith("/edit/")) return "글 수정";
    return "페이지 없음";
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Header title={getTitle()}></Header>
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
};
export default Layout;
