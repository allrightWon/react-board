import "./App.css";
import { PostsStateContext } from "./contexts/PostsContext";
import { PostsDispatchContext } from "./contexts/PostsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer, useRef } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostWritePage from "./pages/PostWritePage";
import NotFoundPage from "./pages/NotFountPage";
import PostEditPage from "./pages/PostEditPage";

const now = new Date();

const mockPosts = [
  {
    id: 1,
    title: "첫번째 게시물입니다",
    content: "그냥내용이지롱 첫번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 10),
    author: "작성자",
  },
  {
    id: 2,
    title: "두번째 게시물입니다",
    content: "그냥내용이지롱 두번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 9),
    author: "작성자",
  },
  {
    id: 3,
    title: "세번째 게시물입니다",
    content: "그냥내용이지롱 세번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 8),
    author: "작성자",
  },
  {
    id: 4,
    title: "네번째 게시물입니다",
    content: "그냥내용이지롱 네번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7),
    author: "작성자",
  },
  {
    id: 5,
    title: "5번째 게시물입니다",
    content: "그냥내용이지롱 5번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 6),
    author: "작성자",
  },
  {
    id: 6,
    title: "6번째 게시물입니다",
    content: "그냥내용이지롱 6번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 5),
    author: "작성자",
  },
  {
    id: 7,
    title: "7번째 게시물입니다",
    content: "그냥내용이지롱 7번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 4),
    author: "작성자",
  },
  {
    id: 8,
    title: "8번째 게시물입니다",
    content: "그냥내용이지롱 8번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3),
    author: "작성자",
  },
  {
    id: 9,
    title: "9번째 게시물입니다",
    content: "그냥내용이지롱 9번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2),
    author: "작성자",
  },
  {
    id: 10,
    title: "10번째 게시물입니다",
    content: "그냥내용이지롱 10번째 ㅋㅋ",
    date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 1),
    author: "작성자",
  },
  {
    id: 11,
    title: "11번째 게시물입니다",
    content: "그냥내용이지롱 11번째 ㅋㅋ",
    date: new Date(now.getTime()),
    author: "작성자",
  },
  {
    id: 12,
    author: "막스 바르스타펜",
    title: "테스트용 글입니다",
    content: "테스트용 글 123123123",
    date: new Date(now.getTime()), //
  },
];

const postsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.newPost];
    case "DEL_POST":
      return state.filter((post) => post.id !== action.id);
    case "UPDATE_POST":
      return state.map((post) =>
        post.id === action.id
          ? { ...post, title: action.title, content: action.content }
          : post
      );
    default:
      return state;
  }
};

function App() {
  const [posts, dispatch] = useReducer(postsReducer, mockPosts);

  const idRef = useRef(20);

  const onCreatePost = (title, author, content) => {
    dispatch({
      type: "ADD_POST",
      newPost: {
        id: idRef.current++,
        title,
        author,
        content,
        date: new Date(),
      },
    });
  };

  const onDeletePost = (id) => {
    dispatch({
      type: "DEL_POST",
      id,
    });
  };

  const onUpdatePost = (id, title, content) => {
    dispatch({
      type: "UPDATE_POST",
      id,
      title,
      content,
    });
  };

  return (
    <PostsStateContext.Provider value={posts}>
      <PostsDispatchContext.Provider
        value={{ onCreatePost, onDeletePost, onUpdatePost }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Layout></Layout>}>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route
                path="/posts"
                element={<PostListPage></PostListPage>}
              ></Route>
              <Route
                path="/posts/:id"
                element={<PostDetailPage></PostDetailPage>}
              ></Route>
              <Route
                path="/write"
                element={<PostWritePage></PostWritePage>}
              ></Route>
              <Route
                path="/edit/:id"
                element={<PostEditPage></PostEditPage>}
              ></Route>
              <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsDispatchContext.Provider>
    </PostsStateContext.Provider>
  );
}

export default App;
