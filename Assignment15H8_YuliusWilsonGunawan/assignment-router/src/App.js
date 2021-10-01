import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import About from './component/About';
import Experience from './component/Experience';
import Home from './component/Home';
import Skills from './component/Skills';
import Interest from './component/Interest';
import Awards from './component/Awards';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <br />
      <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Experience />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/interest">
              <Interest />
            </Route>
            <Route path="/awards">
              <Awards />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
