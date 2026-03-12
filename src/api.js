import axios from "axios";

const API = "http://localhost:8000";

export const getRecommendations = async (userId) => {
  const response = await axios.get(`${API}/recommend/${userId}`);
  return response.data;
};