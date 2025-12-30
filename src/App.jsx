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

const daysAgo = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

const mockPosts = [
  {
    id: 1,
    title: "오늘의 날씨는 맑음",
    author: "날씨알리미",
    content: "오늘은 화창한 날씨가 이어지겠습니다, 외출 어떠신가요?",
    date: daysAgo(20),
  },
  {
    id: 2,
    title: "아침 공기가 상쾌하네요",
    author: "산책러",
    content: "이른 아침에 나가니 공기가 참 좋았습니다, 근데 추워요",
    date: daysAgo(18),
  },
  {
    id: 3,
    title: "점심 뭐 먹을까요",
    author: "오점뭐",
    content: "매일 점심 메뉴 정하는 게 제일 어렵네요.",
    date: daysAgo(16),
  },
  {
    id: 4,
    title: "커피 없이는 살 수 없어",
    author: "카페인중독",
    content: "커피는 생명수입니다.",
    date: daysAgo(14),
  },
  {
    id: 5,
    title: "오늘은 진짜 집가서 바로 잔다",
    author: "피곤해",
    content: "너무 피곤해",
    date: daysAgo(13),
  },
  {
    id: 6,
    title: "우산 안 챙겼는데 비오네",
    author: "갑자기비옴",
    content: "편의점 우산 비싼데",
    date: daysAgo(11),
  },
  {
    id: 7,
    title: "주말 언제와",
    author: "쉬고싶다",
    content: "아직도 화요일이라니",
    date: daysAgo(10),
  },
  {
    id: 8,
    title: "오늘 턱걸이 10개 성공",
    author: "헬린이",
    content: "매일같이 당기니까 되긴 하네요 이게",
    date: daysAgo(8),
  },
  {
    id: 9,
    title: "저녁에 햄버거나 먹어야겠다",
    author: "배달앱의왕",
    content: "햄버거 추천받습니다",
    date: daysAgo(6),
  },
  {
    id: 10,
    title: "다음주에 축제한대요",
    author: "길동",
    content: "다들 참여하세요",
    date: daysAgo(5),
  },
  {
    id: 11,
    title: "요즘 날씨 변덕 심하네",
    author: "기상맨",
    content: "기온차가 심하니까 감기 조심",
    date: daysAgo(3),
  },
  {
    id: 12,
    title: "할인정보 확인하세요",
    author: "효율왕",
    content: "2월까지 전 제품 세일한다고 합니다. 늦지 않게 챙기세요",
    date: daysAgo(2),
  },
  {
    id: 13,
    title: "와 오늘 진짜 춥네",
    author: "온몸에패딩",
    content: "그냥 집에 있어야겠다",
    date: daysAgo(1),
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
