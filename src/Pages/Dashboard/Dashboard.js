import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import axios from "axios";
import Loading from "../../components/Loading/LoadingPage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useHistory } from "react-router-dom";
import Button from "../../components/UI/Button/button";
import Input from "../../components/UI/Input/Input";
import Appointments from "./Appointments/Appointment";
import Compress from "react-image-file-resizer";

const Dashboard = (props) => {
  const history = useHistory();
  const [fileName, setFileName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const converBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const converBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Compress.imageFileResizer(
        file,
        300,
        400,
        "JPEG",
        80,
        0,
        (uri) => {
          resolve(uri);
          console.log("uri");
          console.log(uri);
        },
        "base64"
      );
    });

  const onchangeFile = async (e) => {
    setFileName(e.target.files[0]);
    const file = e.target.files[0];
    console.log(e.target.files[0].name);
    const image = await resizeFile(file);
    console.log(image);
    // const base64 = await converBase64(file);
    console.log("Base64");
    setFile(image);
    setFileName(e.target.files[0].name);
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
        "https://pamira-clinic.herokuapp.com/api/services/add",
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
    <div className={styles.dashboard}>
      <div className={styles.logout}>
        <h2>Dashboard</h2>
        <Button
          onClick={() => {
            localStorage.removeItem("userInfo");
            props.setToken("");
            props.setToken("");
            history.push("/");
          }}
          style={{ padding: " .30rem 1rem" }}
        >
          Logout
        </Button>
      </div>
      <div className={styles.upload}>
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
          id="file"
          name="serviceImage"
          onChange={onchangeFile}
        />
        <div className={styles.sbmBtn}>
          <Button
            style={{
              backgroundColor: "#283b42",
              color: "white",
              padding: "9px 18px",
            }}
            type="submit"
            onClick={submitHandler}
          >
            Add Service
          </Button>
        </div>
      </div>
      <div>
        <h2 style={{ margin: "2% 0" }}>Appointments</h2>
        <Appointments />
      </div>
    </div>
  );
};
export default Dashboard;
