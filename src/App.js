import Header from "./components/Headers/Header";
import Contact from "./Pages/Contact";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
