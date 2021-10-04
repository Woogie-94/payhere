import axios from "axios";
import React from "react";
import { Route, Switch } from "react-router";
import Header from "./containers/Header";
import Favorite from "./page/Favorite";
import Issues from "./page/Issues";

function App() {
  axios.defaults.headers.common["Authorization"] = `token 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`;

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Favorite} />
        <Route exact path="/issues" component={Issues} />
      </Switch>
    </>
  );
}

export default App;
