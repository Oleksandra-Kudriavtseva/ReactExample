import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movie from "./pages/Movie";
import Book from "./pages/Book";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <div style={{ padding: 30 }}>
        <h1>Recommendation System</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/movie">Movie</Link> |{" "}
          <Link to="/book">Book</Link> |{" "}
          <Link to="/game">Game</Link>
        </nav>

        <Routes>
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;