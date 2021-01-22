//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Pages && Components
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
import ProjectDetail from "./pages/ProjectDetail";
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
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/work/:id">
          <ProjectDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
