import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://seyibackend.herokuapp.com/blogs");
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
