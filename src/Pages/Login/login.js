import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/button";


const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState([]);
  // const loginUser = async (credentials) => {
  //   // const [data, setData] = useState("");
  //    fetch('http://localhost:5000/dashboard', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: credentials
  //   })
  //     .then(data => {
  //       console.log(data);
  //       // data.json()
  //     }
  //       )
  
  // };

  const loginUser = (credentials) => {

    try {
      fetch("http://localhost:5000/dashboard", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: credentials.username, password: credentials.password})
          })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setLogin(result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["login-form"]}>
        <h4>Login Page</h4>
        <div className={styles["login-border"]}>
          <Input
            placeholder="Username"
            id="email"
            required
            //ref={emailInputRef}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            id="password"
            required
            //ref={passwordInputRef}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.btn}>
            <Button
              style={{
                backgroundColor: "#283b42",
                color: "white",
                padding: "4px 18px",
              }}
              type="submit"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
