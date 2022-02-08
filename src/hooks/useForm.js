import { useState } from "react";

function useForm(initialState = {}) {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearData = () => {
    setFormData(initialState);
  };

  return { formData, handleInputChange, clearData };
}

export default useForm;
