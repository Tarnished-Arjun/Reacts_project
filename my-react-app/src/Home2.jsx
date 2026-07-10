import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <Link to="/register">
        <button>Go to Registration Form</button>
      </Link>
    </>
  );
}

export default Home;