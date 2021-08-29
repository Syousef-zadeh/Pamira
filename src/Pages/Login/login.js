import React from "react";
import styles from "./login.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/button";


const Login = () => {
  return (
    <div className={styles["login-form"]}>
        <h4>Login Page</h4>
      <div className={styles['login-border']}>
        <Input placeholder="Username" type="text" />
        <Input placeholder="password" type="password" />
        <Button style={{backgroundColor: "#283b42", color: "white"}}>Login</Button>
      </div>
    </div>
  );
};
export default Login;
