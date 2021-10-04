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
