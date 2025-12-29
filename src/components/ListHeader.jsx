import { Link } from "react-router-dom";
import "./ListHeader.css";

const ListHeader = ({ onChangeSort, sortType }) => {
  return (
    <div className="list-header">
      <div className="list-controls">
        <button
          className={`sort-btn ${sortType === "latest" ? "active" : ""}`}
          onClick={() => onChangeSort("latest")}
        >
          최신순
        </button>
        <button
          className={`sort-btn ${sortType === "oldest" ? "active" : ""}`}
          onClick={() => onChangeSort("oldest")}
        >
          오래된순
        </button>
      </div>
      <Link to={"/write"}>글 작성</Link>
    </div>
  );
};
export default ListHeader;
