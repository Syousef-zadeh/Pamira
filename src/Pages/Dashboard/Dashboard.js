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
  const [serviceName, setServiceName] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const onchangeFile =async (e) => {
    //setFileName(e.target.files[0]);
    const file = e.target.files[0];
    console.log(e.target.files[0].name);
    const base64 = await converBase64(file);
    console.log(base64);
    setFile(base64);
    setFileName(e.target.files[0].name)
  };

  const converBase64 =(file) =>{
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload =()=>{
        resolve(fileReader.result)
      };
      fileReader.onerror=(error)=>{
        reject(error)
      }
    })
  }
  console.log(typeof fileName);
  console.log(serviceName);


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
          file,
          fileName,
          serviceName,
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
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
        <Input
          placeholder="Photo"
          type="file"
          name="serviceImage"
          //value={fileName}
          onChange={onchangeFile}
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
