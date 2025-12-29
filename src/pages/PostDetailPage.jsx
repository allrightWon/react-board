import "./PostDetailPage.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostsStateContext } from "../contexts/PostsContext";
import { PostsDispatchContext } from "../contexts/PostsContext";

const PostDetailPage = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const posts = useContext(PostsStateContext);
  const { onDeletePost } = useContext(PostsDispatchContext);

  const post = posts.find((post) => Number(post.id) === Number(id));

  if (!post) {
    return <div>해당 게시글이 존재하지 않습니다.</div>;
  }

  const onClickUpdate = () => {
    nav(`/edit/${post.id}`);
  };

  const onClickDelete = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      onDeletePost(Number(id));
      nav("/posts");
    }
  };

  return (
    <div className="page-detail">
      <div className="detail-wrap">
        <div className="post-title-box">
          <h2 className="post-title">제목: {post.title}</h2>
        </div>
        <div className="post-meta-box">
          <span className="post-author">작성자: {post.author}</span>
          <span className="post-date">
            작성일: {post.date.toLocaleString()}
          </span>
        </div>
        <div className="post-content-box">
          <p className="post-content">{post.content}</p>
        </div>
        <div className="post-action-box">
          <button className="post-list-btn" onClick={() => nav("/posts")}>
            목록
          </button>
          <button className="post-edit-btn" onClick={onClickUpdate}>
            수정
          </button>
          <button className="post-del-btn" onClick={onClickDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostDetailPage;
