import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Error 404. The webpage that you are looking for is unavailable.</h1>
      <Link to="/">Back to homepage..</Link>
    </div>
  );
};

export default NotFound;
