import { useState, useEffect } from "react";
import { getRecommendations, getGlobalTop, getUserTop } from "../api";

import ItemCard from "../components/ItemCard";
import Sidebar from "../components/Sidebar";

function Book() {
    const [userId, setUserId] = useState("");
    const [data, setData] = useState([]);
    const [globalTop, setGlobalTop] = useState({});
    const [userTop, setUserTop] = useState({});

    useEffect(() => {
        loadGlobal();
    }, []);

    const loadGlobal = async () => {
        const global = await getGlobalTop();
        setGlobalTop(global ?? {});
    };

    const load = async () => {
        const rec = await getRecommendations(userId);
        setData(rec?.recommendations?.books ?? []);

        if (userId) {
            const user = await getUserTop(userId);
            setUserTop(user ?? {});
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "75%" }}>
                <h2>Books</h2>

                <input
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="User ID"
                />

                <button onClick={load}>Load</button>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {data.map((item) => (
                        <ItemCard
                            key={item.id}
                            item={item}
                            userId={userId}
                            type="book"
                        />
                    ))}
                </div>
            </div>

            <Sidebar
                globalTop={globalTop}
                userTop={userTop}
                type="books"
                userId={userId}
            />
        </div>
    );
}

export default Book;