import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Description from "./components/Description";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/hi" />
      </Switch>
      <Landing />
      <Description />
      <Skills />
      <Testimonial />
      <Form />
      <Footer />
    </Router>
  );
}

export default App;
