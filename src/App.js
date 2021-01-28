//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Pages && Components
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
import ProjectDetail from "./pages/ProjectDetail";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import { useState } from "react";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <GlobalStyle />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
