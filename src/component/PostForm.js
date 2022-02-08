import { useContext, useRef } from "react";
import PostsContext from "../context/PostsContext";
import useForm from "../hooks/useForm";

export default function PostForm() {
  const ctx = useContext(PostsContext);
  const formRef = useRef(null);
  const { formData, handleInputChange, clearData } = useForm({
    title: "",
    body: "",
  });

  const { addPost } = ctx;

  const { title, body } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    clearData();
  };

  return (
    <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="body"
        value={body}
        onChange={handleInputChange}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}
