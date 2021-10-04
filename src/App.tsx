import axios from "axios";
import React from "react";
import { Route, Switch } from "react-router";
import Header from "./containers/Header";
import Favorite from "./page/Favorite";
import Issues from "./page/Issues";

function App() {
  // 토큰 자꾸 사라짐!!!!!
  // axios.defaults.headers.common["Authorization"] = `token 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`;

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
