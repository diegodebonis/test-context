import { useReducer } from "react";
import PostsContext from "./PostsContext";
import PostsReducer from "./PostsReducer";

const PostsState = (props) => {
  const initialState = {
    posts: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(PostsReducer, initialState);

  const readPosts = async () => {
    try {
      dispatch({
        type: "START_READ_POSTS",
      });
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      dispatch({
        type: "READ_POSTS",
        payload: jsonData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = (post) => {
    const newPost = { ...post, id: state.posts.length + 1 };
    dispatch({
      type: "ADD_POST",
      payload: [...state.posts, newPost],
    });
  };

  const removePost = (id) => {
    const newPosts = state.posts.filter((item) => item.id !== id);
    dispatch({
      type: "REMOVE_POST",
      payload: newPosts,
    });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        isLoading: state.isLoading,
        readPosts,
        addPost,
        removePost,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState;
