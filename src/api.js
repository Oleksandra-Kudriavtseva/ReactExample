import axios from "axios";

const API = "http://localhost:8000";

export const getRecommendations = async (userId) => {
    const response = await axios.get(`${API}/recommend/${userId}`);
    return response.data;
};


export const getGlobalTop = async () => {
    const res = await axios.get(`${API}/global_top`);
    return res.data;
};

export const getUserTop = async (userId) => {
    const res = await axios.get(`${API}/user_top/${userId}`);
    return res.data;
};

export const rateItem = async (userId, itemId, type, rating) => {
    await axios.post(`${API}/rate`, {
        user_id: userId,
        item_id: itemId,
        item_type: type,
        rating: rating
    });
};