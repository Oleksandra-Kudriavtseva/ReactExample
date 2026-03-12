import { useState } from "react";
import { getRecommendations } from "../api";

function Movie() {
  const [userId, setUserId] = useState(""); 
  const [data, setData] = useState([]);
  const [error, setError] = useState(""); 

  const load = async () => {
    setError(""); 
    try {
      const result = await getRecommendations(userId);

      
      if (!result.recommendations || !result.recommendations.movie) {
        setData([]);
        setError("Неправильний ID користувача");
        return;
      }

      setData(result.recommendations.movie);
    } catch (err) {
      console.error(err);
      setData([]);
      setError("Неправильний ID користувача");
    }
  };

  return (
    <div>
      <h2>Movies</h2>

      <input
        type="text"
        placeholder="Введіть ID користувача"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <button onClick={load}>Load movies</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img
            src={item.image}
            width="120"
            alt=""
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/120x180?text=No+Image";
            }}
          />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Movie;