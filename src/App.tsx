import axios from "axios";
import React from "react";
import { Route, Switch } from "react-router";
import Header from "./containers/Header";
import Favorite from "./page/Favorite";
import Issues from "./page/Issues";

function App() {
  // API 시간당 요청을 늘리기 원한다면 "토큰 자리"를 지우시고 Token을 넣어주신 다음 주석을 해제하세요!
  // axios.defaults.headers.common["Authorization"] = `token 토큰 자리`;

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
