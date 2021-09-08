import React, { useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/LoadingPage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useHistory } from "react-router-dom";
import Button from "../../components/UI/Button/button";
import Input from "../../components/UI/Input/Input";

const Dashboard = (props) => {
  const history = useHistory();
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const onchangeFile = (e) => {
    setFileName(e.target.file[0]);
  };

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
        "http://localhost:5000/api/services/add",
        {
          fileName,
          title,
        },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h5>Add a Service</h5>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Input
          placeholder="Service Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Photo"
          type="file"
          name="serviceImage"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <Button
          style={{
            backgroundColor: "#283b42",
            color: "white",
            padding: "4px 18px",
          }}
          type="submit"
          onClick={submitHandler}
        >
          Add Service
        </Button>
      </div>
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
