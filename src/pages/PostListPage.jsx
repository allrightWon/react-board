import "./PostListPage.css";
import { useState, useContext } from "react";
import { PostsStateContext } from "../contexts/PostsContext";
import ListHeader from "../components/ListHeader";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

const PostListPage = () => {
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const posts = useContext(PostsStateContext);

  const onChangeSort = (type) => {
    setSortType(type);
    setCurrentPage(1);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
    setCurrentPage(1);
  };

  const SearchFilteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(input.toLowerCase())
  );

  const sortedPosts = [...SearchFilteredPosts].sort((a, b) => {
    if (sortType === "latest") {
      return b.date - a.date;
    }
    return a.date - b.date;
  });

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="page-posts">
      <div className="post-search">
        <input
          value={input}
          className="post-search-input"
          onChange={onChangeInput}
          type="text"
          placeholder="검색어를 입력하세요"
        />
      </div>
      <ListHeader onChangeSort={onChangeSort} sortType={sortType}></ListHeader>
      <PostList paginatedPosts={paginatedPosts} keyword={input}></PostList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={onChangePage}
      ></Pagination>
    </div>
  );
};
export default PostListPage;
