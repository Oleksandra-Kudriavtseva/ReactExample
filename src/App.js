import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movie from "./pages/Movie";
import Book from "./pages/Book";
import Game from "./pages/Game";

function App() {
  return (
      <Router>
        <div style={styles.container}>
          <h1 style={styles.title}>Recommendation System</h1>

          <nav style={styles.nav}>
            <Link style={styles.link} to="/movie">Movies</Link>
            <Link style={styles.link} to="/book">Books</Link>
            <Link style={styles.link} to="/game">Games</Link>
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

const styles = {
  container: {
    minHeight: "100vh",
    padding: 30,
    background: "linear-gradient(135deg, #e6ecff, #f5f8ff)"
  },
  title: {
    textAlign: "center",
    color: "#2c3e50"
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30
  },
  link: {
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: 20,
    background: "#3b5b8a",
    color: "white",
    fontWeight: "500",
    transition: "0.3s"
  }
};

export default App;