import React from "react";
import Header from "./components/Headers/Header";
import Contact from "./Pages/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/Home";
import Mbi from "./Pages/MBI/Mbi";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Service from "./Pages/Services/ServiceDetails";
import Booking from "./Pages/Booking/Booking";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/login";
import useToken from "./components/useToken/useToken";


function App() {

  const {token, setToken } = useToken();
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/Mbi-calculate" component={Mbi} />
          <Route path="/book-appointment" component={Booking} />
          <Route
            path="/dashboard"
            component={() =>
              token && token.length > 1 ? (
                <Dashboard setToken={setToken} />
              ) : (
                <Login setToken={setToken} />
              )
            }
          />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/service/details/:id" component={Service} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
