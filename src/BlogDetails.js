import React from "react";
// import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  // const history = useHistory();

  // const handleDelete = (e) => {
  //   e.preventDefault();

  //   fetch("http://localhost:8000/blogs/" + blog.id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     history.push("/");
  //   });
  // };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <div className="blogd-head">
            <h2>{blog.title}</h2>
            <p>
              Written by - <strong> {blog.author}</strong>
            </p>
          </div>
          <div>{blog.body}</div>
          {/* <button onClick={handleDelete}>Delete Blog</button> */}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;