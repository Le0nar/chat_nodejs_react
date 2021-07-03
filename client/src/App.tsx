import "./App.css";
import { Authorization } from "./modules/Authorization/Authorization";
import { Chat } from "./modules/Chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Authorization isSignIn={true} />}
        />
        <Route
          path="/sign-up"
          exact
          render={() => <Authorization isSignIn={false} />}
        />
        <Route path="/chat" exact render={() => <Chat />} />
      </Switch>
    </Router>
  );
}

export default App;
