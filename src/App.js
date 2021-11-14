import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routex from "./routes";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Routex} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
