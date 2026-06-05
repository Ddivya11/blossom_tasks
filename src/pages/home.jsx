import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-card">

      <h1>🌸 Blossom Tasks</h1>

      <p className="description">
        Stay organized in a calm and beautiful space.
        Create tasks, set priorities and complete them
        on time without feeling overwhelmed.
      </p>

      <button
        className="main-btn"
        onClick={() => navigate("/tasks")}
      >
        Start Planning
      </button>

      <footer>
        🌷 Made by Divya 🌸
      </footer>

    </div>
  );
}

export default Home;