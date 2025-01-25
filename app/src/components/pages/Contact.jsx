import React from "react";

const Contact = () => {
    return (
        <div style={styles.container}>
            <div style={styles.infoSection}>
                <h2 style={styles.title}>CONTACT</h2>
                <p>Travel Bhakta</p>
                <p>249411</p>
                <p>
                    📞 <b>+91-9997936868</b> - Narendra Patidar
                </p>
                <p>📧 rajup4all19@gmail.com</p>
                <p>⏰ 24*7</p>
            </div>
            <div style={styles.formSection}>
                <h2 style={styles.title}>CONTACT</h2>
                <form style={styles.form}>
                    <div style={styles.inputGroup}>
                        <input type="text" placeholder="Name" style={styles.input} />
                        <input type="text" placeholder="Phone" style={styles.input} />
                    </div>
                    <input
                        type="email"
                        placeholder="Email address"
                        style={styles.inputFull}
                    />
                    <textarea placeholder="Message" style={styles.textarea}></textarea>
                    <button type="submit" style={styles.button}>
                        CONTACT US
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1d2935",
        padding: "20px",
        boxSizing: "border-box",
        color: "#f8f8f8",
    },
    infoSection: {
        width: "100%",
        maxWidth: "600px",
        marginBottom: "30px",
        fontSize: "16px",
    },
    formSection: {
        width: "100%",
        maxWidth: "600px",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#f8f8f8",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    inputGroup: {
        display: "flex",
        gap: "10px",
        marginBottom: "15px",
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    inputFull: {
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%",
    },
    textarea: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "15px",
        minHeight: "100px",
        width: "100%",
    },
    button: {
        backgroundColor: "#f5c99b",
        border: "none",
        padding: "10px 15px",
        color: "#1d2935",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "5px",
    },
};

export default Contact;
