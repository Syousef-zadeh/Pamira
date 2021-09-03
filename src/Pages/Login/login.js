import React, { useState } from "react";
import axios from "axios";
import styles from "./login.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/button";
import Loading from "../../components/Loading/LoadingPage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
 
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "https://pamira-clinic.herokuapp.com/api/users/login",
        {
          username,
          password,
        },
        config
      );
      props.setToken(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <form>
        <div className={styles["login-form"]}>
          <h4>Login Page</h4>
          <div className={styles["login-border"]}>
            <Input
              placeholder="Username"
              id="email"
              required
              //ref={emailInputRef}
              value={username}
              type="text"
              onChange={(u) => setUsername(u.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              id="password"
              required
              //ref={passwordInputRef}
              onChange={(p) => setPassword(p.target.value)}
            />
            <div className={styles.btn}>
              <Button
                style={{
                  backgroundColor: "#283b42",
                  color: "white",
                  padding: "4px 18px",
                }}
                type="submit"
                onClick={submitHandler}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};



export default Login;
