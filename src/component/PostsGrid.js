import { useContext, useEffect } from "react";
import PostsContext from "../context/PostsContext";

export default function PostsGrid() {
  const ctx = useContext(PostsContext);
  const { posts, readPosts, isLoading, removePost } = ctx;

  useEffect(() => {
    const getPosts = async () => {
      await readPosts();
    };
    getPosts();
  }, []);

  return (
    <div className="wrapper">
      {isLoading && <p>Loading...</p>}
      {posts.map((item) => (
        <div key={item.id} className="post">
          <div
            onClick={() => removePost(item.id)}
            style={{ position: "absolute", right: "1rem", cursor: "pointer" }}
          >
            &times;
          </div>
          <div>{item.id}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
}
