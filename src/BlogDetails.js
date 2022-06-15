import React from "react";
// import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const params = useParams();
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch(`https://seyibackend.herokuapp.com/seyiblog`);

  let bloggers = [];

  for (const key in blogs) {
    bloggers.push({
      id: Number(key),
      title: blogs[key].title,
      author: blogs[key].author,
      body: blogs[key].body,
    });
  }

  function getBlog(id) {
    return bloggers.find((blogger) => blogger.id === id);
  }

  let blogData = getBlog(Number(params.blogid));

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <div className="blogd-head">
            <h2>{blogData.title}</h2>
            <p>
              Written by - <strong> {blogData.author}</strong>
            </p>
          </div>
          <div>{blogData.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

// const history = useHistory();

// const handleDelete = (e) => {
//   e.preventDefault();

//   fetch("http://localhost:8000/blogs/" + blog.id, {
//     method: "DELETE",
//   }).then(() => {
//     history.push("/");
//   });
// };
