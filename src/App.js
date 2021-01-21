//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Pages && Components
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
