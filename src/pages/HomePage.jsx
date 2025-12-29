import RecentPostList from "../components/RecentPostList";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page-home">
      <section className="recent-posts-section">
        <h2>최근 게시글</h2>
        <RecentPostList></RecentPostList>
      </section>
      <div className="more-post">
        <Link to={"/posts"} className="link-posts">
          전체글목록
        </Link>
        <Link to={"/write"} className="link-write">
          새글작성
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
