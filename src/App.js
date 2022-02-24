import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Palio from "./components/dietcomponents/Palio";
import Vegan from "./components/dietcomponents/Vegan";
import Lowcarb from "./components/dietcomponents/Lowcarb";
import Dukan from "./components/dietcomponents/Dukan";
import Ultralowfat from "./components/dietcomponents/Ultralowfat";
import Atkins from "./components/dietcomponents/Atkins";
import NotFound from "./pages/NotFound";
import What from "./pages/What";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Router path="/login">
          <Login />
        </Router>
        <Router path="/signup">
          <SignUp />
        </Router>
        <Router path="/what">
          <What />
        </Router>
        <Router path="/paleo">
          <Palio />
        </Router>
        <Router path="/vegan">
          <Vegan />
        </Router>
        <Router path="/lowcarb">
          <Lowcarb />
        </Router>
        <Router path="/dukan">
          <Dukan />
        </Router>
        <Router path="/ultralowfat">
          <Ultralowfat />
        </Router>
        <Router path="/atkins">
          <Atkins />
        </Router>
        <Router path="**">
          <NotFound />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
