import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  
  const [count, setCount] = useState(0);

  return (
    <div>

      
      <header style={styles.header}>
        <h2>Dashboard</h2>
        <nav>
          <Link to="/Dashboard" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
      </header>

      
      <main style={styles.body}>
        <h3>Counter</h3>

        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>
      </main>

      
      <footer style={styles.footer}>
        <p>© 2026 INDREAM TEC. ALL RIGHTS Reserved.</p>
      </footer>

    </div>
  );
}


const styles = {
  header: {
    background: "#f3f172fa",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    color: "white",
    marginRight: "15px",
    textDecoration: "none"
  },
  body: {
    padding: "40px",
    textAlign: "center"
  },
  footer: {
    background: "#85f164",
    color: "white",
    padding: "10px",
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center"
  }
};