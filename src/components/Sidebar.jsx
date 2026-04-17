function Sidebar({ globalTop, userTop, type, userId }) {
    const globalItems = globalTop?.[type] ?? [];
    const userItems = userTop?.[type] ?? [];

    return (
        <div style={styles.sidebar}>
            <h3 style={styles.title}>Popular</h3>

            {globalItems.slice(0, 3).map((item) => (
                <div key={item.id} style={styles.item}>
                    <img src={item.image} style={styles.image} alt="" />
                    <div>
                        <p style={styles.text}>{item.title}</p>
                        <small style={styles.score}>
                            ⭐ {Number(item.score || 0).toFixed(2)}
                        </small>
                    </div>
                </div>
            ))}

            {userId && (
                <>
                    <h3 style={styles.title}>Your top</h3>

                    {userItems.slice(0, 3).map((item) => (
                        <div key={item.id} style={styles.item}>
                            <img src={item.image} style={styles.image} alt="" />
                            <div>
                                <p style={styles.text}>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

const styles = {
    sidebar: {
        width: "18%",
        background: "#f0f4ff",
        padding: 15,
        borderRadius: 20,
        height: "fit-content",
        boxShadow: "0 6px 15px rgba(0,0,0,0.06)"
    },
    title: {
        marginBottom: 10,
        color: "#2c3e50"
    },
    item: {
        display: "flex",
        gap: 10,
        marginBottom: 12,
        alignItems: "center"
    },
    image: {
        width: 50,
        height: 70,
        objectFit: "cover",
        borderRadius: 8
    },
    text: {
        fontSize: 14,
        margin: 0,
        color: "#333"
    },
    score: {
        color: "#888",
        fontSize: 12
    }
};

export default Sidebar;