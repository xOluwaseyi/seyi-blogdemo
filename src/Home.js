import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://seyibackend.herokuapp.com/seyiblog");

  let bloggers = [];

  for (const key in blogs) {
    bloggers.push({
      id: Number(key),
      title: blogs[key].title,
      author: blogs[key].author,
      body: blogs[key].body,
    });
  }

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={bloggers} title="All Blogs!" />}
    </div>
  );
};

export default Home;
