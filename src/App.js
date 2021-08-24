import Header from "./components/Headers/Header";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Mbi from "./Pages/MBI/Mbi"
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Mbi-calculate" component={Mbi}/>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
