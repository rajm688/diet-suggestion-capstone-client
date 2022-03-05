import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Palio from "./components/dietcomponents/Palio";
import Vegan from "./components/dietcomponents/Vegan";
import Lowcarb from "./components/dietcomponents/Lowcarb";
import Dukan from "./components/dietcomponents/Dukan";
import Ultralowfat from "./components/dietcomponents/Ultralowfat";
import Atkins from "./components/dietcomponents/Atkins";
import NotFound from "./pages/NotFound";
import What from "./pages/What";
import { useState } from "react";
function App() {
  const authToken = localStorage.getItem("token") || null;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(authToken);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home user={user} token={token} />
        </Route>
        <Route path="/login">
          <Login
            user={user}
            setUser={setUser}
            setToken={setToken}
            token={token}
          />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/what">
          <What />
        </Route>
        <Route path="/paleo">
          <Palio />
        </Route>
        <Route path="/vegan">
          <Vegan />
        </Route>
        <Route path="/lowcarb">
          <Lowcarb />
        </Route>
        <Route path="/dukan">
          <Dukan />
        </Route>
        <Route path="/ultralowfat">
          <Ultralowfat />
        </Route>
        <Route path="/atkins">
          <Atkins />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
