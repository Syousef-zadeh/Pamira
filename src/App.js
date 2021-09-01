import React from "react";
import Header from "./components/Headers/Header";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Mbi from "./Pages/MBI/Mbi";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Service from "./Pages/Services/ServiceDetails";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/login";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/Contact" component={Contact} />
        <Route path="/Mbi-calculate" component={Mbi} />
        <Route path="/book-appointment" component={Booking} />
        <Route path="/administrator/login" component={Login} />
        
        <Route path="/dashboard" component={Dashboard} />

        {/* <Route exact path="https://www.instagram.com/pamira.clinic/?hl=en"/> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/service-details/:serviceId" component={Service} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
