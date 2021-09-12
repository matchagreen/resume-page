import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
  let history = useHistory();
  const { id } = useParams();
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div> Loading... </div>}
      {error && <div> {error} </div>}

      {blogs && (
        <article>
          <div className="blog-details">
            <h2>{blogs.title}</h2>
            <p>{blogs.body}</p>
            <p>Written by : {blogs.author}</p>
            <button onClick={handleDelete}>Delete Blog</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
