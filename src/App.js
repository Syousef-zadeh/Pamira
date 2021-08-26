import Header from "./components/Headers/Header";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Mbi from "./Pages/MBI/Mbi"
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Service from "./Pages/Services/ServiceDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/Contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route path="/Mbi-calculate" component={Mbi}/>
        <Route exact path="https://www.instagram.com/pamira.clinic/?hl=en"/>
        <Route exact path="/service-details/:serviceId" component={Service} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
