import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refresh
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      history.push("/");
    });

    console.log(blog);
  };

  return (
    <div className="create">
      <h2>Add a new blog!</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title : </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>

        <label>Blog Content : </label>
        <textarea
          className="content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>Blog Author : </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        ></input>

        <button className="save">Save Blog!</button>

        <p>
          {title}
          {author}
          {body}
        </p>
      </form>
    </div>
  );
};

export default Create;
