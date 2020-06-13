// src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { APP_PRODUCTION, GAME_SERVER_URL } from "./config/config.js";
import { Client } from "boardgame.io/react";
import { KalitidiGame } from "./game/game.js";
import { SocketIO } from "boardgame.io/multiplayer";
import HomePage from "./components/homePageComponent/homePage.js";
import './App.css';

function App() {
  const history = useHistory();
  const server = APP_PRODUCTION
    ? `https://${window.location.hostname}`
    : GAME_SERVER_URL;
  const KalitidiClient = Client({
    game: KalitidiGame,
    multiplayer: SocketIO({ server: server }),
  });
  const renderKalitidiClient = () => {
    return <KalitidiClient playerID="0"></KalitidiClient>;
  };
  return (
    <Router>
      <Switch>
        <Route
          path="/home"
          exact
          render={(props) => <HomePage {...props} history={history} />}
        />
        <Route path="/play" exact render={(props) => renderKalitidiClient()} />
        <Route
          path="*"
          render={(props) => <HomePage {...props} history={history} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
