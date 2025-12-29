import "./PostWritePage.css";
import TitleInput from "../components/TitleInput";
import ContentTextarea from "../components/ContentTextarea";
import { useState, useContext } from "react";
import { PostsDispatchContext } from "../contexts/PostsContext";
import { useNavigate } from "react-router-dom";

const PostWritePage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const nav = useNavigate();

  const { onCreatePost } = useContext(PostsDispatchContext);

  const onClickWrite = () => {
    if (!title || !author || !content) return;

    onCreatePost(title, author, content);

    nav("/posts");
  };

  return (
    <div className="page-write">
      <form className="post-write-form">
        <div className="write-header">
          <TitleInput value={title} onChange={setTitle}></TitleInput>
          <input
            className="author-input"
            type="text"
            placeholder="작성자"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
            onClick={onClickWrite}
            className="write-done-btn"
          >
            작성완료
          </button>
        </div>
      </form>
    </div>
  );
};
export default PostWritePage;
