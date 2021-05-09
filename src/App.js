import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";

function App() {
  return (
    <>
      <Router>
        <Header headercolor="white" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
