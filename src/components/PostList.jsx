import PostListItem from "./PostListItem";

const PostList = ({ paginatedPosts, keyword }) => {
  return (
    <ul className="post-list">
      {paginatedPosts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          mode={"list"}
          keyword={keyword}
        ></PostListItem>
      ))}
    </ul>
  );
};
export default PostList;
