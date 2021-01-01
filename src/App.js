import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Programs from "./pages/Programs";
import School from "./pages/School";
import Event from "./pages/Event";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/programs" component={Programs} />
        <Route path="/schools" component={School} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/event" component={Event} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
