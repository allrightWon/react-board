import PostListItem from "./PostListItem";
import { useContext } from "react";
import { PostsStateContext } from "../contexts/PostsContext";

const RecentPostList = () => {
  const posts = useContext(PostsStateContext);

  const filteredPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <ul className="recent-posts">
      {filteredPosts.map((post) => (
        <PostListItem key={post.id} post={post} mode={"recent"}></PostListItem>
      ))}
    </ul>
  );
};
export default RecentPostList;
