import "./PostEditPage.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { PostsStateContext } from "../contexts/PostsContext";
import { PostsDispatchContext } from "../contexts/PostsContext";
import TitleInput from "../components/TitleInput";
import ContentTextarea from "../components/ContentTextarea";

const PostEditPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const posts = useContext(PostsStateContext);
  const { onUpdatePost } = useContext(PostsDispatchContext);

  const post = posts.find((post) => Number(post.id) === Number(id));

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);

  if (!post) {
    return <div>게시물이 없습니다.</div>;
  }

  const onClickUpdate = () => {
    if (!post.id || !title || !content) return;

    onUpdatePost(post.id, title, content);
    alert("수정이 완료되었습니다.");
    nav(`/posts/${id}`);
  };

  return (
    <div className="page-edit">
      <form className="post-write-form">
        <div className="write-header">
          <TitleInput value={title} onChange={setTitle}></TitleInput>
          <input
            className="author-input"
            type="text"
            placeholder="작성자"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            disabled
          />
        </div>
        <div className="write-body">
          <ContentTextarea
            value={content}
            onChange={setContent}
          ></ContentTextarea>
        </div>
        <div className="write-actions">
          <button
            type="button"
            onClick={onClickUpdate}
            className="write-done-btn"
          >
            수정완료
          </button>
        </div>
      </form>
    </div>
  );
};
export default PostEditPage;
