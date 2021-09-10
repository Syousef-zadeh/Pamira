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
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const onchange =async (e) => {
    //setFileName(e.target.files[0]);
    const file = e.target.files[0];
    const base64 = await converBase64(file);
    console.log(base64);
    setFileName(base64);
    // setFile(e.target.files[0].name)
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
  console.log(fileName);
  console.log(title);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const fb = new FormData();
      fb.append("serviceName", title);
      fb.append("serviceImage", fileName);

      // const config = {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/services/add",
        fb
        // "http://localhost:5000/api/services/add",
        // {
        //   file,
        //   fileName,
        //   title,
        // },
        // config
      );
      console.log(data);
      //localStorage.setItem("serviceInfo", JSON.stringify(data));
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
        <form encType="multipart/form-data">
          <Input
            placeholder="Service Title"
            type="text"
            filename="serviceName"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Photo"
            type="file"
            filename="serviceImage"
            onChange={(e) => onchange(e)}
            //onChange={(e) => setFileName(e.target.value)}
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
        </form>
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
