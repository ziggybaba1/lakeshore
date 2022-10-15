import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Course from "./pages/course/Course";

function App() {
  return (
    <Router>
      <Switch>
        <Route name="courses" path="/courses" exact={true}>
          <Courses />
        </Route>
        <Route name="course" path="/courses/:id" exact={true}>
          <Course />
        </Route>
        <Route name="home" path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
