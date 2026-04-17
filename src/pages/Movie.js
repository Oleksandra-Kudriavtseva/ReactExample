import { useState, useEffect } from "react";
import {
    getRecommendations,
    getGlobalTop,
    getUserTop
} from "../api";

import ItemCard from "../components/ItemCard";
import Sidebar from "../components/Sidebar";

function Movie() {
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
        setData(rec?.recommendations?.movies ?? []);

        if (userId) {
            const user = await getUserTop(userId);
            setUserTop(user ?? {});
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.main}>
                <h2>Movies</h2>

                <input
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="User ID"
                />

                <button onClick={load}>Load</button>

                <div style={styles.grid}>
                    {data.map((item) => (
                        <ItemCard
                            key={item.id}
                            item={item}
                            userId={userId}
                            type="movie"
                        />
                    ))}
                </div>
            </div>

            <Sidebar
                globalTop={globalTop}
                userTop={userTop}
                type="movies"
                userId={userId}
            />
        </div>
    );
}

const styles = {
    container: {
        display: "flex"
    },
    main: {
        width: "75%"
    },
    grid: {
        display: "flex",
        flexWrap: "wrap"
    }
};

export default Movie;