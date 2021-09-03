import React, { useState } from "react";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/login";
import useToken from "../useToken/useToken";

const LandingPage = () => {
//   const [token, setToken] = useState();


//   if (!token) {
//     return <Login setToken={setToken} />;
//   }
   return <Dashboard />
};
export default LandingPage;