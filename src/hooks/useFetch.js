import { useState, useEffect } from "react";

function useFetch(URL = "") {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [URL]);

  return { data, isLoading, error };
}

export default useFetch;
