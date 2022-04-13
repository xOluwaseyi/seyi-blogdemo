import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data!");
        }

        return res.json();
      })
      .then((data) => {
        const newData = [];

        for (const key in data) {
          newData.push({
            id: key,
            author: data[key].author,
            body: data[key].body,
            title: data[key].title,
          });
        }

        setData(newData);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch cleanup");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
