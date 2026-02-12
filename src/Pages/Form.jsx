import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill all fields");
      return;
    }

    if (isLogin) {
      // LOGIN
      localStorage.setItem("token", "fake-login-token");
      alert("Login Successful");
    } 
    else {
      // SIGNUP → send data to backend
      try {
        const res = await axios.post("http://localhost:5000/api/adduser", {
          name,
          email,
          password
        });

        localStorage.setItem("token", "fake-signup-token");
        alert("Signup Successful & Data Saved in DB");
        console.log(res.data);

      } catch (error) {
        alert("Signup Failed");
        console.error(error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>{isLogin ? "Login" : "Signup"}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          {isLogin ? "Login" : "Signup"}
        </button>

        <p style={styles.text}>
          {isLogin ? "New user?" : "Already have an account?"}
          <span
            style={styles.link}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Signup" : " Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;


const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  form: {
    width: "320px",
    padding: "20px",
    background: "white",
    boxShadow: "0 0 10px #ccc",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "8px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  text: {
    marginTop: "10px",
    fontSize: "14px",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    marginLeft: "5px",
  },
};
