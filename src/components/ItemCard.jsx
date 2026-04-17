import { useState } from "react";
import { rateItem } from "../api";

function ItemCard({ item, userId, type }) {
    const [expanded, setExpanded] = useState(false);
    const [rating, setRating] = useState(0);

    const handleRate = (value) => {
        if (!userId) {
            alert("Enter user ID");
            return;
        }
        setRating(value);
        rateItem(userId, item.id, type, value);
    };

    const safeText = (text) =>
        typeof text === "string" ? text : "";

    const description = safeText(item.description);

    return (
        <div
            style={{
                ...styles.card,
                width: type === "game" ? "30%" : "22%"
            }}
        >
            <img
                src={item.image}
                style={{
                    ...styles.image,
                    ...(type !== "game" ? styles.imageBookMovie : styles.imageGame)
                }}
                alt=""
            />

            <h4 style={styles.title}>{item.title}</h4>

            <p style={styles.text}>
                {expanded
                    ? description
                    : description.slice(0, 80) +
                    (description.length > 80 ? "..." : "")}
            </p>

            <button
                style={styles.button}
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Close" : "Read more"}
            </button>

            <div style={{ marginTop: 10 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                    <span
                        key={s}
                        style={{
                            ...styles.star,
                            color: s <= rating ? "#FFD54F" : "#bbb"
                        }}
                        onClick={() => handleRate(s)}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
}

const styles = {
    card: {
        background: "#eef5ff",
        padding: 15,
        borderRadius: 20,
        margin: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        transition: "0.3s"
    },
    title: {
        marginTop: 10,
        color: "#2c3e50",
        textAlign: "center"
    },
    text: {
        textAlign: "center",
        color: "#555",
        minHeight: 60
    },

    image: {
        width: "100%",
        borderRadius: 15
    },


    imageGame: {
        height: 220,
        objectFit: "cover"
    },


    imageBookMovie: {
        aspectRatio: "2 / 3",
        objectFit: "cover"
    },

    button: {
        marginTop: 10,
        padding: "8px 18px",
        background: "#3b5b8a",
        color: "white",
        border: "none",
        borderRadius: 20,
        cursor: "pointer",
        fontWeight: "500",
        transition: "0.3s"
    },

    star: {
        cursor: "pointer",
        fontSize: 22,
        margin: "0 3px",
        transition: "0.2s"
    }
};

export default ItemCard;