import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "../Login/login";
import Button from "../../components/UI/Button/button";


const Dashboard = (props) => {
  const history = useHistory();

  return (
    <div>
      <h2>Dashboard</h2>
      <Button
        onClick={() => {
          localStorage.removeItem("userInfo");
           props.setToken("");
          history.push("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
};
export default Dashboard;
