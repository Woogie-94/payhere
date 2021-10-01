import React from "react";
import { Switch } from "react-router-dom";
import Header from "./containers/Header";
import SearchSideBar from "./containers/SearchSideBar";

function App() {
  return (
    <>
      <Header />
      <SearchSideBar />
      <Switch></Switch>
    </>
  );
}

export default App;
