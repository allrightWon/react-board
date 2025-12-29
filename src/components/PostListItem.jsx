import "./PostListItem.css";
import { Link } from "react-router-dom";

const PostListItem = ({ post, mode, keyword }) => {
  const { title } = post;

  if (!keyword) {
    return (
      <li className="post-list-item">
        <Link to={`/posts/${post.id}`} className="post-link">
          <div className="post-badge-box">
            {mode === "recent" && <span className="badge-new">NEW</span>}
            {mode === "list" && <span className="badge-id">{post.id}</span>}
          </div>
          <div className="post-info-box">
            <div className="post-info-top">
              <div className="post-title-box">
                <p>{title}</p>
              </div>
            </div>
            <div className="post-info-bott">
              <div className="post-author-box">
                <span>{post.author}</span>
              </div>
              <div className="post-date-box">
                <span>{post.date.toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }

  const parts = title.split(new RegExp(`(${keyword})`, "gi"));

  return (
    <li className="post-list-item">
      <Link to={`/posts/${post.id}`} className="post-link">
        <div className="post-badge-box">
          {mode === "recent" && <span className="badge-new">NEW</span>}
          {mode === "list" && <span className="badge-id">{post.id}</span>}
        </div>
        <div className="post-title-box">
          <p>
            {parts.map((part, index) =>
              part.toLowerCase() === keyword.toLowerCase() ? (
                <span key={index} className="highlight">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </p>
        </div>
        <div className="post-date-box">
          <span>{post.date.toLocaleDateString()}</span>
        </div>
      </Link>
    </li>
  );
};
export default PostListItem;
