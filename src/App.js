import PostsState from "./context/PostsState";

import PostsGrid from "./component/PostsGrid";
import PostForm from "./component/PostForm";
// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  return (
    <div className="App">
      <PostsState>
        <PostForm />
        <PostsGrid />
      </PostsState>
    </div>
  );
}

export default App;
